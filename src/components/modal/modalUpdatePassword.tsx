import { FormEvent, useState } from 'react'
import Modal from '.'
import useForm from '../../hooks/useForm'
import { useUpdatePassword } from '../../services/useUpdatePassword'
import InputFloat from '../inputs/InputFloat'

interface Props {
  onClose: () => void
  isOpen: boolean
}


const ModalUpdatePassword = ({ isOpen, onClose }: Props) => {
  const {updatePassword, loadingUpdatePassword} = useUpdatePassword()
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const {
    currentPassword,
    newPassword,
    confirmationPassword,
    onChange,
    resetForm
  } = useForm({
    currentPassword: '',
    newPassword: '',
    confirmationPassword: ''
  })

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (newPassword === confirmationPassword) {
        const res = await updatePassword({
          passwordAntiguo: currentPassword,
          passwordNuevo: newPassword
        })
        if (res?.ok) {
          setSuccessMessage('Su contraseña de cambió correctamente')
          setTimeout(() => {
            setSuccessMessage('')
            handleClose()
          }, 3000)
        } else {
          setErrorMessage(res?.error || '')
          setTimeout(() => {
            setErrorMessage('')
          }, 3000)
        } 
      } else {
        setErrorMessage('la contraseña no coincide')
        setTimeout(() => {
          setErrorMessage('')
        }, 2000)
      }
    } catch (e) {
      setErrorMessage('Error desconocido')
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      className='w-[95%] md:w-[600px] h-max flex rounded-xl shadow-lg overflow-hidden'>
      <form
        className='bg-white rounded-lg relative overflow-hidden w-full flex flex-col items-center py-10 md:py-20'
        onSubmit={handleSubmit}
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute top-2 right-4 text-primary font-bold cursor-pointer'
        >
          X
        </button>
        <div className='w-full sm:w-[300px] flex flex-col gap-3 mb-10 px-6'>
          <InputFloat 
            type='password'
            label='Contraseña actual'
            name='currentPassword'
            value={currentPassword}
            onChange={onChange}
            required
          />
          <span>Ingresa su nueva contraseña:</span>
          <InputFloat 
            type='password'
            label='Nueva Contraseña'
            name='newPassword'
            value={newPassword}
            onChange={onChange}
            required
          />
          <InputFloat 
            type='password'
            label='Confirmar contraseña'
            name='confirmationPassword'
            value={confirmationPassword}
            onChange={onChange}
            required
          />
          {errorMessage && <p className='text-base text-red-700 mx-auto text-center'>{errorMessage}</p>}
          {successMessage && <p className='text-base text-green-600 mx-auto text-center'>{successMessage}</p>}
        </div>
        <button
          className='bg-primary w-48 rounded-md h-10 text-white font-bold disabled:opacity-50 disabled:cursor-default outline-primary'
          disabled={loadingUpdatePassword || !!successMessage} 
        >Cambiar contraseña</button>
      </form>
    </Modal>
  )
}

export default ModalUpdatePassword