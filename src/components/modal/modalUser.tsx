import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'

import FormLogin from '../forms/formLogin'
import FormRegister from '../forms/formRegister'
import FormRecoveryPassword from '../forms/formRecoveryPassword'
import Modal from '.'
import useForm from '../../hooks/useForm'
import { useUsuario } from '../../services/useUsuario'
import { useRecoveryPassword } from '../../services/useRecoveryPassword'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalUser = ({ isOpen, onClose }: Props) => {
  const [tipoForm, setTipoForm] = useState('ingresar')
  const { createUsuario, loadingCreate } = useUsuario()
  const { status, data } = useSession() as any

  const [messageRecovery, setMessageRecovery] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { nombres, apellidos, email, password, onChange, resetForm } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    password: ''
  })

  const {recoveryPassword, loadingRecovery} = useRecoveryPassword()

  const asignarFormulario = () => {
    let component = null

    if (tipoForm === 'ingresar') {
      component = <FormLogin email={email} password={password} onChange={onChange} />
    } else if (tipoForm === 'registrate') {
      component = (
        <FormRegister nombre={nombres} apellido={apellidos} email={email} password={password} onChange={onChange} />
      )
    } else if (tipoForm === 'recuperar') {
      component = <FormRecoveryPassword email={email} onChange={onChange} />
    }

    return component
  }

  const cambiarFormulario = (showForm?: 'recuperar' | 'ingresar' | 'registrate') => {
    if (tipoForm === 'ingresar') {
      resetForm()
      showForm ? setTipoForm('recuperar') : setTipoForm('registrate')
      setErrorMessage('')
      setError(false)
    } else if (tipoForm === 'registrate') {
      resetForm()
      showForm ? setTipoForm('recuperar') : setTipoForm('ingresar') 
      setErrorMessage('')
      setError(false)
    } else if (tipoForm === 'recuperar') {
      resetForm()
      setTipoForm('ingresar')
      setErrorMessage('')
      setError(false)
    }
  }

  const textoBtnCambiarForm = () => {
    const textos = []

    if (tipoForm === 'ingresar') {
      textos[0] = 'Si no tienes una cuenta '
      textos[1] = 'regístrate aquí'
      textos[2] = 'Iniciar sesión'
      textos[3] = 'Ingresar'
      textos[4] = '¿Olvidaste tu contraseña?'
    } else if (tipoForm === 'registrate') {
      textos[0] = 'Si ya tienes una cuenta '
      textos[1] = 'ingrese por aquí'
      textos[2] = 'Regístrate'
      textos[3] = 'Regístrate'
      textos[4] = '¿Olvidaste tu contraseña?'
    } else if (tipoForm === 'recuperar') {
      textos[0] = 'Si ya tienes una cuenta '
      textos[1] = 'ingrese por aquí'
      textos[2] = 'Iniciar sesión'
      textos[3] = 'Recuperar Contraseña'
    }

    return textos
  }

  const handleClick = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (tipoForm === 'registrate') {
      createUsuario({ email, password, nombres, apellidos }).then((res) => {
        if (res?.ok) {
          setTipoForm('ingresar')
          setErrorMessage('')
        } else {
          setError(true)
          setErrorMessage(res.error)
          setTimeout(() => {
            setError(false)
            setErrorMessage('')
          }, 5000)
        }
      })
    }
    if (tipoForm === 'ingresar') {
      await signIn('credentials', {
        redirect: false,
        email,
        password
      })
        .then((res) => {
          if (res?.ok) {
            onClose()

            setErrorMessage('')
          } else {
            setError(true)
            setErrorMessage(res?.error || '')
            setTimeout(() => {
              setError(false)
              setErrorMessage('')
            }, 5000)
          }
        })
        .catch((err) => console.log('err', err))
    }
    if (tipoForm === 'recuperar') {
      const res = await recoveryPassword({email: email})
      if (res?.ok ) {
        setMessageRecovery(res?.data!)
        setTimeout(() => {
          setTipoForm('ingresar')
          setErrorMessage('')
          setMessageRecovery('')
        }, 5000)
      } else {
        setError(true)
        setErrorMessage(res?.error || '')
        setTimeout(() => {
          setError(false)
          setErrorMessage('')
        }, 5000)
      }
    }
  }

  const handleClose = () => {
    resetForm()
    setTipoForm('ingresar')
    setErrorMessage('')
    setError(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      className='w-[95%] md:w-[800px] md:h-[540px] flex rounded-xl shadow-lg overflow-hidden'>
      <div className='w-full hidden md:block lg:w-1/2 z-50'>
        <Image
          src='/imgs/home/torero.jpg'
          alt='Torero'
          width={500}
          height={800}
          objectPosition='center'
          objectFit='cover'
        />
      </div>
  
      <div className=' w-full lg:w-1/2 p-6 bg-white'>
        <div className='flex justify-center mb-5'>
          <Image
            objectFit='scale-down'
            className='cursor-pointer filter-logo'
            src='/imgs/logos/logo.png'
            width={200}
            height={80}
            alt='logo'
          />
        </div>

        <form onSubmit={handleClick}>
          {asignarFormulario()}

          {messageRecovery && <p className='text-sm mt-5'>{messageRecovery}</p>}
          <div className='mt-7 flex justify-end'>
            <button
              type='submit'
              disabled={loadingRecovery}
              className='bg-primary text-white cursor-pointer w-full py-3 rounded-lg disabled:cursor-default disabled:opacity-50'
            >
              {textoBtnCambiarForm()[3]}
            </button>
          </div>
        </form>

        {error && <p className='text-center font-bold text-red-500 mt-3'>{errorMessage}</p>}

        <div className={`${error ? 'mt-1' : 'mt-4'}`}>
          <p className='text-base text-gray-400'>
            {textoBtnCambiarForm()[0]}
            <span className='text-primary cursor-pointer' onClick={() => cambiarFormulario()}>
              {textoBtnCambiarForm()[1]}
            </span>{' '}
          </p>
          <span className='text-primary cursor-pointer' onClick={() => cambiarFormulario('recuperar')}>
            {textoBtnCambiarForm()[4]}
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default ModalUser
