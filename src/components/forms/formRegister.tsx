import React, { ChangeEvent } from 'react'
import useForm from '../../hooks/useForm'
import InputFloat from '../inputs/InputFloat'

interface IProps {
  nombre: string
  apellido: string
  email: string
  password: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormRegister = ({ nombre, apellido, email, password, onChange }: IProps) => {
  return (
    <div className='flex flex-col gap-5 '>
      <InputFloat type='text' label='Nombre' name='nombres' value={nombre} onChange={onChange} required />
      <InputFloat type='text' label='Apellido' name='apellidos' value={apellido} onChange={onChange} required />
      <InputFloat type='email' label='E-mail' name='email' value={email} onChange={onChange} required />
      <InputFloat type='password' label='Contraseña' name='password' value={password} onChange={onChange} required />
    </div>
  )
}

export default FormRegister
