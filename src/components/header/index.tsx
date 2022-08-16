import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IconCart from '../../../public/icons/IconCart'
import IconUser from '../../../public/icons/IconUser'
import { useRouter } from 'next/router'
import BtnBurger from '../btnBurger'
import ModalUser from '../modal/modalUser'
import SidebarCart from '../sidebarCart'
import { useCarritoContext } from '../../context/cart/CarritoState'
import { getSession, signOut, useSession } from 'next-auth/react'

const links = [
	{ title: 'Inicio', path: '/' },
	{ title: 'La Plaza', path: '/plaza' },
	{ title: 'Eventos', path: '/eventos' },
	{ title: 'Contacto', path: '#contacto' }
]

const Header = () => {
	const { pathname } = useRouter()
	const router = useRouter()
	const [isOpen, setIsOpen] = useState(false)
	const [navbar, setNavbar] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [isOpenCart, setIsOpenCart] = useState(false)
	const [cerrar, setCerrar] = useState(false)
	const { status, data } = useSession() as any

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', changeBackground)
		return () => {
			window.removeEventListener('scroll', changeBackground)
		}
	}, [])

	useEffect(() => {
		if (status === 'authenticated') {
			localStorage.setItem('token', data?.user?.apiToken)
			localStorage.setItem('user', JSON.stringify(data?.user))
		}
	}, [status])

	const handleSignOut = async () => {
		await signOut({ redirect: false })
		localStorage.removeItem('token')
	}

	return (
		<header
			className={`h-[70px] md:h-[80px] w-full fixed  top-0  z-10 flex-col justify-center items-center transition-colors duration-500 ease-in-out $ ${
				pathname === '/' || pathname === `/eventos/[slug]`
					? navbar
						? 'bg-primary bg-opacity-80 backdrop-blur'
						: 'bg-transparent'
					: 'bg-primary  sticky'
			}`}>
			{/* menu desktop */}
			<nav className='hidden mx-auto my-0 w-[90%] xl:w-[1200px] flex-col h-full  lg:flex items-center justify-center'>
				<div className='w-full   text-white text-lg  flex items-center justify-between'>
					<Link href='/' passHref>
						<div className='flex w-[20%]'>
							<Image objectFit='scale-down' className='cursor-pointer' src='/imgs/logos/logo.png' width={180} height={60} alt='logo' />
						</div>
					</Link>
					<div className='w-[60%]  flex items-center gap-16'>
						<ul className='flex gap-8 mx-auto relative '>
							{links.map(({ title, path }) => (
								<Link href={path} passHref key={title}>
									<li
										className={`cursor-pointer text-base py-1 px-5 border-b  ease-in-out duration-700 transition-all hover:text-yellow-500 ${
											pathname === path ? 'text-secondary  border-secondary' : 'border-transparent hover:border-yellow-500'
										}`}>
										{title}
									</li>
								</Link>
							))}
						</ul>
					</div>
					<div className='w-[20%] flex justify-end '>
						<button
							aria-label='Login'
							onClick={() => {
								setCerrar(!cerrar)
								setShowModal(true)
							}}
							style={{ boxShadow: '-8px 6px 13px 0px rgba(0,0,0,0.42)' }}
							className='bg-tertiary pr-4 pl-3 py-2 rounded-sm text-white font-semibold cursor-pointer  shadow-primary'>
							<div className='flex gap-x-2 items-center'>
								<IconUser fill='#fff' height={20} width={20} />
								<p className=' text-sm'>{status === 'authenticated' ? data?.user?.nombres : 'Ingresa'}</p>
							</div>
						</button>
					</div>
				</div>
			</nav>
			{/* menu mobile */}
			<nav className={`lg:hidden mx-auto my-0 w-[90%] xl:w-[1280px] flex justify-between items-center h-full `}>
				<div className='flex w-full justify-between items-center  '>
					<Link href='/' passHref>
						<div className='flex'>
							<Image className='cursor-pointer' src='/imgs/logos/logo.png' width={120} height={50} alt='logo' />
						</div>
					</Link>
					<div className='flex  items-center gap-5'>
						<button
							aria-label='Login'
							onClick={() => {
								setCerrar(!cerrar)
								setShowModal(true)
							}}
							style={{ boxShadow: '-8px 6px 13px 0px rgba(0,0,0,0.42)' }}
							className='bg-tertiary px-3 py-2 rounded-sm text-white font-semibold cursor-pointer  shadow-primary'>
							<div className='flex items-center gap-x-3'>
								<IconUser fill='#fff' height={25} width={25} />
								<p className=' text-sm'>{status === 'authenticated' ? data?.user?.nombres : 'Ingresa'}</p>
							</div>
						</button>
						<BtnBurger isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>

					<ul
						className={`text-white fixed top-16  w-full p-5 transition-all -right-full duration-500 backdrop-blur-lg ${
							pathname === '/' || pathname === '/plaza' || pathname === `/eventos/[slug]`
								? navbar
									? 'bg-primary'
									: 'bg-transparent'
								: 'bg-primary'
						} ${isOpen && 'transition-all -right-0 duration-500'}`}>
						{links.map(({ title, path }) => (
							<Link href={path} passHref key={title}>
								<li
									className={`text-center cursor-pointer font-semibold  py-2 border-b-2 border-transparent  ease-out duration-300 transition-all hover:text-yellow-500 ${
										pathname === path ? 'text-secondary ' : ''
									}`}>
									{title}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</nav>

			{status === 'authenticated' && (
				<>
					{cerrar && (
						<div className='relative mx-auto my-0 w-[90%] xl:w-[1280px]'>
							<div className='absolute top-0 bg-tertiary rounded-lg z-50 w-60 p-3 -right-4 lg:-right-[60px] xl:-right-[35px]'>
								<div className=' justify-center w-full absolute -top-2.5 left-0 z-50 flex'>
									<div className='h-5 w-5 bg-tertiary rotate-45'></div>
								</div>

								<button
									className='bg-primary mt-2 rounded-lg w-full py-2 text-white font-bold'
									onClick={() => {
										router.push('/mi-cuenta')
										setCerrar(false)
									}}>
									Perfil
								</button>

								<button className='bg-primary mt-2 rounded-lg w-full py-2 text-white font-bold' onClick={handleSignOut}>
									Cerrar Sesión
								</button>
							</div>
						</div>
					)}
				</>
			)}

			{status !== 'authenticated' && (
				<ModalUser
					isOpen={showModal}
					onClose={() => {
						setShowModal(false)
						setCerrar(false)
					}}
				/>
			)}
			<SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
		</header>
	)
}

export default Header
