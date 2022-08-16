import { Field, Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import IconCalendar from '../../../public/icons/IconCalendar'
import IconHour from '../../../public/icons/IconHour'
import * as Yup from 'yup'
import { useEntradasUsuario } from '../../services/useEntradasUsuario'
interface Props {
  eventoId?: number | null | undefined
  tendido?: string | null | undefined
  reservado?: string | null | undefined
  tipoDocumento?: string | null | undefined
  numDocumento?: string | null | undefined
  nombres?: string | null | undefined
  apellidos?: string | null | undefined
  asientoId: string
  slug: number
}

const FormUpdateAsiento = ({
  eventoId,
  tendido,
  reservado,
  tipoDocumento,
  numDocumento,
  nombres,
  apellidos,
  asientoId,
  slug
}: Props) => {
  const [mensaje, setMensaje] = useState('')
  const [error, serError] = useState(false)
  const { updateAsignacionEntrada,loadingUpdate } = useEntradasUsuario(slug)

  const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues:{
      tipoDocumento: tipoDocumento ?? 'DNI',
      documento: numDocumento ?? '',
      nombres: nombres ?? '',
      apellidos: apellidos ?? ''
    },
   validationSchema: Yup.object({
      documento: Yup.string()
      .required(`El número es requerido`)
      .matches(/^[0-9]+$/, 'Debe ser solo números'),
      nombres: Yup.string().required(`El nombre es requerido`),
      apellidos: Yup.string().required(`El apellido es requerido`)
   }),
    onSubmit:() => {
      updateAsignacionEntrada({
        apellidos: values.apellidos,
        asientoId: asientoId,
        nombres: values.nombres,
        numDocumento: values.documento,
        tipoDocumento: values.tipoDocumento
      }).then((res) => {
        if (res?.ok) {
          setMensaje('Datos actualizados')
          serError(false)
        } else {
          setMensaje('No se pudo actualizar')
          serError(true)
        }
        setTimeout(() => {
          setMensaje('')
          serError(false)
        }, 5000)
      })
    }
  })

  const isDisabled = numDocumento === values.documento && nombres === values.nombres && apellidos === values.apellidos || loadingUpdate

  return (
    <article key={eventoId} className='max-w-[280px] p-5 bg-white rounded-xl shadow-lg'>
      <h2 className='text-xl leading-6 font-bold'>
        FERIA CAJABAMBA <br />
        {tendido} <br />
        {reservado}
      </h2>

      <div className='flex gap-x-5 py-3'>
        <div className='flex items-center gap-x-3'>
          <IconCalendar width={12} height={12} />
          <p className='text-xs mt-0.5'>junio 25, 2022</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <IconHour width={12} height={12} />
          <p className='text-xs mt-0.5'> 1:05</p>
        </div>
      </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
            <select
              name='tipoDocumento'
              className='rounded-sm h-10 px-3 border border-gray-40'
              value={values.tipoDocumento}
              onChange={handleChange}
              onBlur={handleBlur}>
              <option className='' value='DNI'>
                DNI
              </option>
              <option className='' value='CE'>
                CE
              </option>
            </select>

            <div className='relative'>
              <input
                name='documento'
                type='text'
                className='rounded-sm w-full text-black focus:outline-none h-10 px-3 border border-gray-400'
                placeholder='Nro de Documento'
                value={values.documento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.documento && touched.documento ? (
                <p className='text-red-500 leading-5 absolute -bottom-5 text-sm px-1 '>{errors.documento}</p>
              ) : null}
            </div>
            <div className='relative'>
              <input
                name='nombres'
                type='text'
                className='rounded-sm w-full text-black focus:outline-none h-10 px-3 border border-gray-400'
                placeholder='Nombres'
                value={values.nombres}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nombres && touched.nombres ? (
                <p className='text-red-500 leading-5 absolute -bottom-5 text-sm px-1 '>{errors.nombres}</p>
              ) : null}
            </div>
            <div className='relative'>
              <input
                name='apellidos'
                type='text'
                className='rounded-sm w-full text-black focus:outline-none h-10 px-3 border border-gray-400'
                placeholder='Apellidos'
                value={values.apellidos}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.apellidos && touched.apellidos ? (
                <p className='text-red-500 leading-5 absolute -bottom-5 text-sm px-1 '>{errors.apellidos}</p>
              ) : null}
            </div>

            <div className='flex justify-center relative'>
              <p className={`absolute -top-5 ${error ? 'text-red-500' : 'text-green-500'}`}>{mensaje}</p>

              <button
               disabled={isDisabled}
                type='submit'
                className={`bg-butacas w-full text-white pb-2 pt-1 mt-5   px-4  transition-all duration-500 rounded-md ${isDisabled?'opacity-50':'opacity-100 hover:bg-tertiary'}`}>
                Registrar
              </button>
            </div>
          </form>
      

      <div className=' text-xs'>
        <p className='text-justify mt-4'>
          Llena los datos del asistente al evento para validar su entrada en la puerta. Tienes hasta una hora antes del
          inicio del evento para hacer el registro o transferir el asiento a otra persona.
        </p>
      </div>
    </article>
  )
}

export default FormUpdateAsiento
