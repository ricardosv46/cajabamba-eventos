import { useRouter } from 'next/router'
import React, { useState } from 'react'
import IconCalendar from '../../../public/icons/IconCalendar'
import IconHour from '../../../public/icons/IconHour'
import Container from '../../components/container'
import { useSession } from 'next-auth/react'
import { FormPayAuth, FormPayNotAuth } from '../../components/FormPay'
import moment from 'moment'
import IconCheck from '../../../public/icons/IconCheck'
import { useAsientosAbonado } from '../../services/useAsientosAbonado'
import useToggle from '../../hooks/useToggle'
import ModalLoading from '../../components/modal/modalLoading'
const CheckOut = () => {
	const { status, data } = useSession() as any
	const { query } = useRouter()
	const { fecha, hora, id } = useRouter().query as any
	const { asientos: desabilitados } = useAsientosAbonado({ feriaId: 1, tendido: id })
	const [pagado, setPagado] = useState(false)
	const [errores, setErrores] = useState('')
	const navigate = useRouter()
	const { isOpen, onOpen, onClose } = useToggle()

	return (
		<Container bgColor='bg-[#fff2e6]' className='px-5 py-5'>
			{pagado && (
				<div className='flex justify-center h-[533px] flex-col items-center text-primary-300 gap-10 py-5'>
					<p className='text-center text-primary font-bold text-xl'>
						Hemos recibido correctamente el pago y enviado tus datos de usuario al correo registrado. Ingresa a la sección de usuarios
						para visualizar tus boletos o para asignar o modificar los asistentes con el usuario y contraseña enviados
					</p>
					<div className='flex justify-center mt-4 text-primary'>
						<IconCheck width={100} height={100} className='text-current' />
					</div>
					<div className='flex flex-col gap-5'>
						<button
							onClick={() => navigate.push('/')}
							className='bg-primary text-[#fff2e6] border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out hover:border-primary hover:bg-[#fff2e6] hover:text-primary'>
							Ir a Inicio
						</button>
						<button
							onClick={() => navigate.push('/eventos')}
							className='bg-[#fff2e6] text-primary border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out border-primary hover:bg-primary hover:text-[#fff2e6]'>
							Seguir Comprando
						</button>
					</div>
				</div>
			)}

			{!pagado && (
				<div className='max-w-[1000px] w-full mx-auto p-10 bg-white shadow-xl rounded-xl'>
					<h1 className='text-3xl font-bold border-b border-black pb-3'>Detalle</h1>
					<div className='flex justify-between flex-wrap border-b border-black'>
						<p className='text-xl  font-bold py-5'>{query.name === 'abono' ? 'Abonos' : 'Eventos'} 2022, Plaza - Cajabamba</p>
						<div className='flex gap-x-5 justify-center flex-wrap items-center'>
							<div className='flex gap-x-3'>
								<div className='mt-0.5'>
									<IconCalendar width={16} height={16} />
								</div>

								<div className=''>{moment(fecha).format('LL')}</div>
							</div>
							<div className='flex gap-x-3'>
								<div className='mt-0.5'>
									<IconHour width={16} height={16} />
								</div>
								<div className=''>{moment(fecha + ' ' + hora).format('hh:mm A')}</div>
							</div>
						</div>
					</div>

					{status === 'authenticated' && (
						<FormPayAuth
							{...{isOpen, onOpen, onClose}}
							desabilitados={desabilitados}
							isAbono={query.name === 'abono'}
							onSubmit={(res) => {
								if (res?.ok) {
									setPagado(true)
								} else {
									setErrores(res?.error!)
									setTimeout(() => {
										setErrores('')
									}, 5000)
								}
							}}
						/>
					)}

					{status !== 'authenticated' && (
						<FormPayNotAuth
						{...{isOpen, onOpen, onClose}}
							desabilitados={desabilitados}
							errores={errores}
							isAbono={query.name === 'abono'}
							onSubmit={(res) => {
								if (res?.ok) {
									setPagado(true)
								} else {
									setErrores(res?.error!)
									setTimeout(() => {
										setErrores('')
									}, 5000)
								}
							}}
						/>
					)}
				</div>
			)}
		</Container>
		
	)
}

export default CheckOut
