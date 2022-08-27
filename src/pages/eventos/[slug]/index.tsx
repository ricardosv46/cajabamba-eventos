import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import IconCalendar from '../../../../public/icons/IconCalendar'
import IconHour from '../../../../public/icons/IconHour'
import Container from '../../../components/container'
import Spinner from '../../../components/spinner'

import { eventos } from '../../../data/eventos'
import { useEventoSlug } from '../../../services/useEventoSlug'
import { usePreciosRefs } from '../../../services/usePreciosRefs'

const colors = ['bg-[#F89F59]', 'bg-[#FFD066]', 'bg-[#FFDA99]', 'bg-[#D03B3E]', 'bg-[#E7565C]', 'bg-[#E7565C]']

const Compra = () => {
	const { slug } = useRouter().query as { slug: string }
	const router = useRouter()

	const { eventoSlug, loading, refetch } = useEventoSlug(slug)
	const handleClick = (id: string) => {
		router.push({
			pathname: `/eventos/${slug}/${id}`,
			query: { fecha: eventoSlug?.fecha, hora: eventoSlug?.hora }
		})
	}

	useEffect(() => {
		if (!loading) {
			if (eventoSlug?.eventoId) {
			} else {
				router.push('/eventos')
			}
		}
	}, [loading])

	const { precios } = usePreciosRefs()

	useEffect(() => {
		refetch()
	}, [slug])

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='relative w-full '>
					{eventoSlug?.imagenPrincipal?.url && (
						<Image
							src={eventoSlug?.imagenPrincipal?.url}
							width={'100%'}
							height={'100%'}
							layout='fill'
							objectFit='cover'
							className='-z-10'
							alt='flyer'
						/>
					)}
					<Container bgColor='backdrop-blur-lg' className='pb-5 pt-36 text-primary'>
						<main className='flex flex-col gap-5 lg:px-5 lg:flex-row'>
							<section className='lg:relative w-full lg:w-[760px]  lg:h-[780px] gap-5  flex flex-col lg:flex-row'>
								<div className='w-full h-full bg-white rounded-lg'>
									<div className='flex flex-col px-8 py-5'>
										<div className=''>
											<h1 className='text-3xl font-extrabold'>{eventoSlug?.titulo}</h1>
											<p className='text-2xl '>Compra tu Abono</p>
										</div>
										<div className='flex items-center mt-4 gap-x-5'>
											{/* <div className='flex gap-x-3'>
												<div className='mt-0.5'>
													<IconCalendar width={16} height={16} fill='#4C000C' />
												</div>

												<div className=''>{moment(eventoSlug?.fecha).format('LL')}</div>
											</div> */}
											{/* <div className='flex gap-x-3'>
												<div className='mt-0.5'>
													<IconHour width={16} height={16} fill='#4C000C' />
												</div>
												<div className=''>{moment(eventoSlug?.fecha + ' ' + eventoSlug?.hora).format('hh:mm A')}</div>
											</div> */}
										</div>
										<div className='flex justify-center mt-5'>
											<Image
												src={`/imgs/compra/coliseo.png
											`}
												objectFit='contain'
												alt='Picture of the author'
												width={600}
												height={600}
											/>
										</div>
									</div>
								</div>
							</section>

							<section className='flex-1 bg-white border rounded-lg shadow-lg'>
								<article className='flex flex-col gap-2 p-3 lg:px-3 '>
									{eventoSlug?.imagenPrincipal?.url && (
										<Image
											src={eventoSlug?.imagenPrincipal?.url}
											alt='Picture of the author'
											loading='lazy'
											width={500}
											height={350}
											className='object-cover'
										/>
									)}

									<h2 className='text-[27px] text-center mt-2 text-primary font-bold '>{eventoSlug?.titulo}</h2>
									<div className='flex items-center justify-center gap-x-5'>
										{/* <div className='flex gap-x-3'>
											<div className='mt-0.5'>
												<IconCalendar width={16} height={16} fill='#4C000C' />
											</div>

											<div className=''>{moment(eventoSlug?.fecha).format('LL')}</div>
										</div> */}
										{/* <div className='flex gap-x-3'>
											<div className='mt-0.5'>
												<IconHour width={16} height={16} fill='#4C000C' />
											</div>
											<div className=''>{moment(eventoSlug?.fecha + ' ' + eventoSlug?.hora).format('hh:mm A')}</div>
										</div> */}
									</div>
									<p className='pb-5 text-center border-b border-black text-md text-text'>
										¡Disfruta una emocionante tarde de toros en la comodidad de nuestras butacas!
									</p>
								</article>
								<article className='mb-5'>
									<p className='px-3 pb-3 text-2xl font-bold text-primary'>Eventos</p>
									<section className='flex flex-col'>
										{precios.map((item, index) => (
											<article
												key={item?.tendido}
												className={`${
													index % 2 === 0 ? 'bg-[#F3F3F3]' : 'bg-white'
												}    flex justify-between p-3 items-center`}>
												<div className='flex-1 text-[10px]'>
													<div>
														<p className='text-sm font-semibold leading-5 text-primary'>{item?.titulo}</p>
														<p className='text-sm font-semibold leading-5 text-primary'>desde </p>
													</div>
												</div>
												<p className='flex-1 text-center text-[20px] font-semibold'>S/ {item?.precio}</p>
												<div className='flex-1'>
													<button
														onClick={() => handleClick(item?.tendido!)}
														className={` px-6 py-2 mt-2 text-sm rounded-sm text-white font-semibold cursor-pointer ${colors[index]} `}>
														<p>Comprar</p>
													</button>
												</div>
											</article>
										))}
									</section>
								</article>
							</section>
						</main>
					</Container>
					<Container bgColor='bg-white' className='flex flex-col justify-between gap-10 p-5 lg:flex-row'>
						<article className='z-0 flex flex-col w-full gap-5 p-5 bg-white border rounded-lg shadow-lg'>
							<h1 className='text-2xl font-bold lg:text-5xl text-primary '>Vive la emoción de cerca!</h1>
							<p className='text-md text-primary '>{eventoSlug?.descripcionLarga}</p>
							<p className='font-bold text-md text-primary'>Información adicional</p>
							<p>Términos y condiciones:</p>
							<p className='-mt-5'>ANTES DE COMPRAR:</p>

							<p>{eventoSlug?.terminosCondiciones}</p>
						</article>

						<section className='z-0 flex items-start justify-center py-5 lg:justify-end'>
							<article className='border w-full  lg:w-[280px] xl:w-[380px] p-3 rounded-md flex flex-col gap-1  shadow-xl'>
								<h2 className='text-2xl font-bold text-primary'>Lurín, Lima</h2>
								<p className='font-semibold text-md text-text'>Fundo Cajabamba</p>
								<div className='w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124765.90864455116!2d-76.87008!3d-12.252702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6836d2dfddd46029!2sFundo%20La%20Esperanza%20-%20Lur%C3%ADn!5e0!3m2!1sen!2sus!4v1653950659611!5m2!1sen!2sus'
										width='100%'
										height='350'
										loading='lazy'
									/>
								</div>
							</article>
						</section>
					</Container>
				</div>
			)}
		</>
	)
}

export default Compra
