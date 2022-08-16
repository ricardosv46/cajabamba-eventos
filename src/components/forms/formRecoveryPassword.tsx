import { ChangeEvent } from 'react'
import InputFloat from '../inputs/InputFloat'

interface IProps {
  email: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormRecoveryPassword = ({ email, onChange }: IProps) => {
  return (
    <div className='flex flex-col gap-5 '>
      <InputFloat type='email' label='Email' name='email' value={email} onChange={onChange} required />
    </div>
  )
}

export default FormRecoveryPassword
