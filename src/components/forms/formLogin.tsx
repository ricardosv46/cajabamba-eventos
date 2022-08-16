import { useRouter } from 'next/router'
import React, { ChangeEvent } from 'react'
import useForm from '../../hooks/useForm'
import InputFloat from '../inputs/InputFloat'

interface IProps {
  email: string
  password: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const FormLogin = ({ email, password, onChange }: IProps) => {
  const navigate = useRouter()

  return (
    <div className='flex flex-col gap-5 '>
      <InputFloat type='email' label='E-mail' name='email' value={email} onChange={onChange} required />
      <InputFloat type='password' label='Contraseña' name='password' value={password} onChange={onChange} required />
    </div>
  )
}

export default FormLogin
