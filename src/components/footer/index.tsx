import { FormikErrors, FormikValues, useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import IconFacebook from '../../../public/icons/IconFacebook'
import IconInstagram from '../../../public/icons/IconInstagram'
import IconMail from '../../../public/icons/IconMail'
import IconMap from '../../../public/icons/IconMap'
import IconPhone from '../../../public/icons/IconPhone'
import IconTwitter from '../../../public/icons/IconTwitter'
import IconWhatsapp from '../../../public/icons/IconWhatsapp'
import IconYoutube from '../../../public/icons/IconYoutube'
import { useSuscriptor } from '../../services/useSuscriptor'
import { isEmail } from '../../utils/isEmail'
import { isEmpty } from '../../utils/isEmpty'
import Container from '../container'

const Footer = () => {
	const { createSuscriptor } = useSuscriptor()

	const [mensaje, setMensaje] = useState('')

	const validationSchema = async (values: FormikValues) => {
		let errors: FormikErrors<FormikValues> = {}

		if (isEmpty(values.nombres)) {
			errors.nombres = 'El nombre es requerido'
		}

		if (isEmpty(values.email)) {
			errors.email = 'El Email es requerido'
		}

		if (!isEmail(values.email)) {
			errors.email = 'Debe ser un Email valido'
		}

		return errors
	}

	const submit = (values: FormikValues) => {
		createSuscriptor({ email: values.email, nombres: values.nombres }).then((res) => {
			if (res?.ok) {
				setMensaje('Gracias por suscribirte')
				resetForm()
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
				setTimeout(() => {
					setMensaje('')
				}, 5000)
			} else {
				setMensaje('Gracias por suscribirte')
				resetForm()
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
				setTimeout(() => {
					setMensaje('')
				}, 5000)
			}
		})
	}

	const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
		validate: validationSchema,
		onSubmit: submit,
		initialValues: {
			nombres: '',
			email: ''
		}
	})

	return (
		<footer id='contacto'>
			<Container bgColor='footer-bg' className='flex flex-col  md:flex-row text-white py-5 gap-5 md:gap-0'>
				<div className='flex-1 flex items-center flex-col text-gray-300 text-[14px] justify-center sm:items-start gap-5'>
					<div className='flex gap-5'>
						<IconMail fill='#A02E2B' width={18} height={18} />
						<p>ventas@plazaticket.com</p>
					</div>
					<div className='flex gap-5'>
						<IconMap fill='#A02E2B' width={18} height={18} />
						<p>Av. Buena Vista, 10-141, Lurín - Lima</p>
					</div>
					<a className='cursor-pointer hover:underline hover:text-secondary' onClick={() => window.open('/terminosycondiciones')}>
						Términos y condiciones
					</a>
					<a className='cursor-pointer hover:underline hover:text-secondary' onClick={() => window.open('/cookies')}>
						PolÍticas de cookies
					</a>
				</div>
				<form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-6 justify-center my-10 sm:mt-0 '>
					<div className='relative'>
						<input
							type='text'
							className='w-full text-black focus:outline-none h-10 px-3 font-normal font-parrafo text-[13px]'
							placeholder='Nombres'
							name='nombres'
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
							type='email'
							className='w-full text-black focus:outline-none h-10 px-3 font-normal font-parrafo text-[13px]'
							placeholder='Correo'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email ? (
							<p className='text-red-500 leading-5 absolute -bottom-5 text-sm px-1'>{errors.email}</p>
						) : null}
					</div>

					<button
						type='submit'
						className='w-full bg-tertiary tracking-[4.9px] h-10 uppercase text-[12px] font-semibold hover:bg-blacklight transition-all ease-in-out duration-500'>
						<p>Suscribete</p>
					</button>
					{mensaje.length > 0 && <p className='text-tertiary text-center font-bold'>{mensaje}</p>}
				</form>
				<div className='flex-1 flex-col flex items-center gap-3 -mt-6 justify-center'>
					<div className='flex justify-center '>
						<Image objectFit='scale-down' className='cursor-pointer' src='/imgs/logos/logo.png' width={175} height={70} alt='logo' />
					</div>
					<div className='flex gap-10'>
						<IconFacebook
							fill='#fff'
							width={25}
							height={25}
							className='cursor-pointer'
							onClick={() => window.open('https://www.facebook.com/plazadetoroslaesperanza')}
						/>
						<IconInstagram
							fill='#fff'
							width={25}
							height={25}
							className='cursor-pointer'
							onClick={() => window.open('https://www.instagram.com/plazadetoroslaesperanza')}
						/>
					</div>
				</div>
			</Container>
			<Container bgColor='bg-[#240006]' className='flex justify-around sm:justify-between text-white text-[8px] font-semibold py-2 lg:px-6'>
				<p>© All rights reserved</p>
				<p>Diseñado por IDEAS Avenue</p>
			</Container>
		</footer>
	)
}

export default Footer
