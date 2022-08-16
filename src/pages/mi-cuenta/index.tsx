import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import IconEdit from '../../../public/icons/IconEdit'
import Container from '../../components/container'
import ModalMiCuenta from '../../components/modal/modalMiCuenta'
import ModalUpdatePassword from '../../components/modal/modalUpdatePassword'
import useForm from '../../hooks/useForm'
import useToggle from '../../hooks/useToggle'
import { useEventosUsuario } from '../../services/useEventosUsuario'
import { useUsuario } from '../../services/useUsuario'

const MiCuenta = () => {
	const navigate = useRouter()
	const { eventos, numeroTotal, loading } = useEventosUsuario()
	const [showModal, setShowModal] = useState(false)
	const { status, data } = useSession() as any
	const [usuario, setUsuario] = useState<any>({})

	const {isOpen, onClose, onOpen} = useToggle()
	useEffect(() => {
		if (status !== 'loading' && status !== 'authenticated') {
			navigate.push('/')
		}
	}, [status])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const user = JSON.parse(localStorage.getItem('user') as any)
			setUsuario(user)
			resetForm({
				nombres: user?.nombres,
				apellidos: user.apellidos,
				numeroDocumento: user?.numeroDocumento,
				email: user?.email,
				celular: user?.celular,
				tipoDocumento: user?.tipoDocumento
			})
		}
	}, [])

	const { nombres, apellidos, numeroDocumento, email, tipoDocumento, celular, onChange, resetForm } = useForm({
		nombres: usuario?.nombres,
		apellidos: usuario.apellidos,
		numeroDocumento: usuario?.numeroDocumento,
		email: usuario?.email,
		celular: usuario?.celular,
		tipoDocumento: usuario?.tipoDocumento
	})

	const { updateUsuario } = useUsuario()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// console.log({ nombres, apellidos, numeroDocumento, email, tipoDocumento, celular })
		updateUsuario({
			id: usuario?.id,
			tipoDocumento,
			numeroDocumento,
			nombres,
			apellidos,
			celular
		}).then((res) => {
			if (res.ok) {
				localStorage.setItem('user', JSON.stringify(res?.data))
				setUsuario(res?.data)
			}
		})
	}

	return (
		<>
			<Container bgColor='bg-[#fff2e6]' className='px-5'>
				<div className='max-w-[1200px]  mx-auto '>
					<div className='pt-10 pb-5 border-b border-black'>
						<h1 className='text-4xl font-bold'>Mi Perfil</h1>
						<div className='flex justify-end' onClick={() => setShowModal(true)}>
							<IconEdit width={20} height={20} />
						</div>
						<div className='w-full flex flex-col md:flex-row gap-y-5 justify-between mt-6 text-base '>
							<div className='w-full flex flex-col gap-y-5'>
								<div className='flex gap-x-3 sm:gap-x-14'>
									<div className='w-24'>Nombres:</div>
									<div className='font-bold w-48'>{usuario?.nombres}</div>
								</div>
								<div className='flex gap-x-3 sm:gap-x-14'>
									<div className='w-24'>{usuario?.tipoDocumento}:</div>
									<div className='font-bold w-48'>{usuario?.numeroDocumento}</div>
								</div>
								<div className='flex gap-x-3 sm:gap-x-14'>
									<div className='w-24'>Teléfono:</div>
									<div className='font-bold w-48'>{usuario?.celular}</div>
								</div>
							</div>

							<div className='w-5/6 flex flex-col  gap-y-5'>
								<div className='flex gap-x-3 sm:gap-x-14'>
									<div className='w-24'>Apellidos:</div>
									<div className='font-bold w-48'>{usuario?.apellidos}</div>
								</div>
								<div className='flex gap-x-3 sm:gap-x-14'>
									<div className='w-24'>Email:</div>
									<div className='font-bold w-48'>{usuario?.email}</div>
								</div>
								<div className=''>
									<button type='button' onClick={onOpen} className='font-bold w-48 bg-primary text-white rounded-sm h-9 outline-butacas'>Cambiar contraseña</button>
								</div>
							</div>
						</div>
					</div>

					<div className='pt-10'>
						<h2 className='text-4xl font-bold'>Mis Entradas</h2>
						<p className='text-xl'>Tienes {numeroTotal} entradas por registrar</p>

						<div className='grid px-5 pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]  mx-auto text-center text-[#505050] mt-20'>
							{eventos.map((evento) => (
								<article key={evento?.eventoId} className='max-w-[300px] mx-auto sm:mx-0 sm:max-w-none cursor-pointer'>
									<div className='' onClick={() => navigate.push(`/mi-cuenta/${evento.eventoId}`)}>
										{evento?.imagenPrincipal?.url && (
											<Image
												src={evento?.imagenPrincipal?.url}
												alt='Picture of the author'
												width={500}
												height={350}
												className='object-cover'
												/>
												)}
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</Container>
			<ModalUpdatePassword isOpen={isOpen} onClose={onClose} />
			{usuario?.apiToken && (
				<ModalMiCuenta
					isOpen={showModal}
					usuario={usuario}
					onClose={() => setShowModal(false)}
					{...{ tipoDocumento, numeroDocumento, nombres, apellidos, celular, email, onChange, handleSubmit }}
				/>
			)}
		</>
	)
}

export const getServerSideProps = async (ctx: any) => {
	const session = await getSession(ctx)

	if (!session)
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}

	return {
		props: {
			session: await getSession(ctx)
		}
	}
}

export default MiCuenta
