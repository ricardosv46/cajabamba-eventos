import Image from 'next/image'
import React from 'react'
import Modal from '.'
import useForm from '../../hooks/useForm'
import { useUsuario } from '../../services/useUsuario'
import InputFloat from '../inputs/InputFloat'
import Select from '../select'
interface Props {
	onClose: () => void
	isOpen: boolean
	usuario: any
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	nombres: string
	apellidos: string
	tipoDocumento: string
	numeroDocumento: string
	email: string
	celular: string
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const ModalMiCuenta = ({
	isOpen,
	onClose,
	usuario,
	nombres,
	apellidos,
	tipoDocumento,
	numeroDocumento,
	email,
	celular,
	onChange,
	handleSubmit
}: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className='h-full md:h-auto w-full md:w-[920px] overflow-y-scroll no-scrollbar '>
			<form onSubmit={handleSubmit} className='bg-white  rounded-lg py-10 relative px-10'>
				<button onClick={onClose} className='absolute top-2 right-4 text-primary font-bold cursor-pointer'>
					X
				</button>
				<p className='text-4xl text-primary font-bold text-center'>Editar Datos</p>
				<div className='grid grid-cols-2 gap-4 mt-10'>
					<InputFloat type='nombres' label='Nombres' name='nombres' value={nombres} onChange={onChange} />

					<InputFloat type='apellidos' label='Apellidos' name='apellidos' value={apellidos} onChange={onChange} />
					<Select
						label='Tipo de Documento'
						name='tipoDocumento'
						value={tipoDocumento}
						onChange={onChange}
						data={[
							{ value: 'DNI', titulo: 'DNI' },
							{ value: 'CE', titulo: 'CE' }
						]}
					/>

					<InputFloat
						type='numeroDocumento'
						label={usuario?.tipoDocumento}
						name='numeroDocumento'
						value={numeroDocumento}
						onChange={onChange}
					/>

					<InputFloat type='email' label='Email' name='email' disabled={true} value={email} onChange={onChange} />

					<InputFloat type='telefono' label='Telefono' name='celular' value={celular} onChange={onChange} />
				</div>

				<div className='mt-7 flex justify-center'>
					<button type='submit' className=' bg-primary text-white cursor-pointer px-10  py-3 rounded-lg' onClick={onClose}>
						Guardar
					</button>
				</div>
			</form>
		</Modal>
	)
}

export default ModalMiCuenta
