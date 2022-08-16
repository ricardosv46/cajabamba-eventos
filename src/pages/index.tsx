import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css/effect-fade'
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import Container from '../components/container'
import Image from 'next/image'
import OpenGraph from '../components/openGraph'
import { useRouter } from 'next/router'
import IconMano from '../../public/icons/IconMano'
import { useEventos } from '../services/useEventos'
import Spinner from '../components/spinner'

const banners = ['banner-home1', 'banner-home2', 'banner-home3', 'banner-home4']

const Home: NextPage = () => {
	const { eventos, loading } = useEventos({ estado: 'Activado', feriaId: 1 })
	const navigate = useRouter()

	return (
		<>
			<OpenGraph
				title='CAJABAMBA - Incio'
				link='CAJABAMBA'
				description='Disfuta del mejor evento de la ciudad, Cajabamba, con una gran variedad de eventos, promociones y mucho más.'
				domain='cajabamba.plazaticket.com'
				img='https://cajabamba.plazaticket.com/imgs/banners/banner3.jpg'
				keywords='Entradas,Eventos,PLazas'
				url='https://cajabamba.plazaticket.com/'
			/>

			<Swiper
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: true
				}}
				simulateTouch={true}
				effect={'fade'}
				modules={[Autoplay, EffectFade]}
				className='mySwiper'>
				{banners.map((banner) => (
					<SwiperSlide key={banner}>
						<div className={`banner ${banner} relative`}>
							<div className='absolute bg-black opacity-[0.34] w-full h-full'></div>
							<div className='mx-auto h-full my-0 w-[90%] xl:w-[1200px] flex justify-end items-center relative z-10'>
								<div className='text-white text-5xl text-right sm:text-6xl lg:text-8xl font-medium flex flex-col items-end '>
									<h2>Vive la tradición</h2>
									<h2>Vive la magia</h2>
									<div className=' mt-4'>
										<button
											onClick={() => navigate.push('eventos')}
											className='relative text-lg text-center  font-bold rounded-l-md rounded-r-full bg-secondary pr-12 pl-6 py-2 mt-4 hover:bg-tertiary ease-in-out duration-300 transition-all shadow-2xl'>
											<p className='font-extrabold'> Venta de entradas</p>
											<div className='absolute -bottom-3 -right-3'>
												<IconMano width={45} height={45} fill='#fff' />
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<section className='bg-fondo  '>
				<div className='banner-parallax-plaza'>
					<div className='mx-auto my-0 w-[90%] xl:w-[1200px]'>
						<div className=' flex flex-col md:flex-row  py-16'>
							<div className=' w-full   flex items-center '>
								<div className='flex flex-col md:items-start gap-5 '>
									<h1 className='text-5xl text-primary font-bold text-center '>LA PLAZA</h1>
									<p className='text-justify px-0 text-[#505050] font-bold'>
										La Plaza de Toros Cajabamba fue inaugurada en el año 2009, siendo un ruedo sin graderías, el punto de
										encuentro y lugar donde se incubó la nueva generación de aficionados prácticos, llenando aquel año cada sábado
										con encerronas taurinas y gratos momentos de confraternidad. <br />
										<br />
										Buscando ser la casa del taurino de buena voluntad, se amplió en una primera etapa dotándola de un callejón
										que permita el buen desarrollo de un festejo taurino y cómodas butacas en las tres filas más cercanas al
										ruedo. Bajo esa configuración se albergaron las primeras corridas de toros formales brindando un lugar muy
										especial a la afición taurina, que fue creando el ambiente y la identidad de Cajabamba, en un espacio de
										campo con sabor criollo y fraternidad. <br />
										<br />Y así, la necesidad de albergar más afición tras vivir esta pandemia hizo que la plaza creciera mucho
										más, contando ahora con un tendido fijo de 12 filas y 5 palcos, capaz de albergar en su totalidad cerca de
										3000 personas, manteniendo su coqueta identidad y esa personalidad que invita a disfrutar una tarde de toros
										entre amigos.
									</p>
									<button
										onClick={() => navigate.push('/plaza')}
										style={{ boxShadow: '-8px 6px 13px 0px rgba(0,0,0,0.42)' }}
										className='bg-tertiary px-6 py-2 rounded-sm text-white font-semibold cursor-pointer  shadow-primary'>
										<p className='font-bold'>Conoce más</p>
									</button>
								</div>
							</div>
							<div className='relative w-full pl-16 flex   sm:bg-transparent'>
								<div className='absolute right-0'></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Container
				bgColor='banner banner-home6 '
				className='flex py-16 lg:py-20 flex-col justify-center items-center gap-14 lg:gap-0 lg:flex-row'>
				<div className='w-full lg:w-1/2'>
					<h2 className='text-5xl text-secondary font-bold lg:px-5 '>PRÓXIMOS EVENTOS</h2>
					<p className='text-white font-semibold text-md lg:px-5 pt-10'>
						¡Renovación, entrega, arte y clase en esta Feria de Cajabamba! Abónate y disfruta una gran feria, donde seremos testigos de
						la nueva generación de grandes toreros, así como el relevo generacional de la torería peruana.
					</p>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex justify-end'>
						<div className='flex justify-center items-center relative w-[520px] '>
							<Image className='cursor-pointer relative' src='/imgs/eventosImage.png' width={520} height={344} alt='logo' />
							<div className='absolute w-full h-full flex justify-end items-end p-5 lg:p-8 '>
								<button
									onClick={() => navigate.push(`/eventos`)}
									className={` absolute  px-4 lg:px-6 py-2 lg:py-2.5  bg-secondary border-2 border-secondary hover:bg-transparent transition-all ease-in-out duration-500 text-white font-semibold text-sm lg:text-lg rounded   `}>
									Comprar entradas
								</button>
							</div>
						</div>
					</div>

					{/* {loading ? (
						<Spinner />
					) : (
						<Swiper
							loop={true}
							autoplay={{
								delay: 4000,
								disableOnInteraction: true
							}}
							slidesPerView={1}
							navigation={true}
							pagination={true}
							modules={[Autoplay, Navigation, Pagination]}
							className='mySwiper'>
							{eventos.map((evento) => (
								<SwiperSlide key={evento?.eventoId}>
									{({ isActive }) => (
										<div className='flex justify-center items-center '>
											<Image
												className='cursor-pointer relative'
												src={evento.imagenPrincipal?.url!}
												width={520}
												height={344}
												alt='logo'
											/>
											<button
												onClick={() => navigate.push(`/eventos/${evento?.eventoId}`)}
												className={`bottom-7 lg:bottom-10 right-5 lg:right-20 absolute px-4 lg:px-6 py-2 lg:py-2.5  bg-secondary border-2 border-secondary hover:bg-transparent transition-all ease-in-out duration-500 text-white font-semibold text-sm lg:text-lg rounded   ${
													isActive ? 'animate-fade' : 'animate-fade-out'
												}`}>
												Comprar entradas
											</button>
										</div>
									)}
								</SwiperSlide>
							))}
						</Swiper>
					)} */}
				</div>
			</Container>
			<Container bgColor='bg-primarydark'>
				<div className='flex flex-col md:flex-row  banner banner-parallax '>
					<div className='flex  sm:bg-transparent'>
						<Image className='cursor-pointer relative' src={`/imgs/home/toro.png`} width={557} height={531} alt='logo' />
					</div>
					<div className=' w-full flex-1 flex items-center  bg-primarydark'>
						<div className='flex flex-col md:items-end gap-10'>
							<h2 className='text-3xl md:text-5xl text-secondary font-bold lg:ml-7'>VENTA DE ENTRADAS</h2>
							<p className='text-gray-100 text-lg lg:ml-7 md:text-right '>
								Descubre nuestros próximos carteles y compra tus entradas para vivir al máximo la fiesta en Cajabamba
							</p>
							<button
								onClick={() => navigate.push('eventos')}
								style={{ boxShadow: '-8px 6px 13px 0px rgba(0,0,0,0.42)' }}
								className='bg-tertiary px-8 py-2.5 rounded-sm text-white font-semibold cursor-pointer  shadow-primary'>
								Comprar aquí
							</button>
						</div>
					</div>
				</div>
			</Container>
			<div className='bg-fondo relative'>
				<div className='absolute top-0 left-0 '>
					<div className=''>
						<Image
							src={`/imgs/logos/logo-fondo.png`}
							alt='Picture of the author'
							width={100}
							height={100}
							className='object-cover rounded-md'
						/>
					</div>
				</div>

				{/* <div className='  flex flex-col  max-w-[1200px]  mx-auto px-5 py-20 '>
					<h1 className='text-5xl text-primary font-bold text-center mb-20 uppercase'>Noticias</h1>

					<div className='grid pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center text-[#505050] '>
						<article
							style={{ boxShadow: '-14px 14px 14px -5px rgba(0,0,0,0.42)' }}
							className='max-w-[300px] mx-auto sm:mx-0 sm:max-w-none bg-white  rounded-2xl shadow-md'>
							<div className=''>
								<Image
									src={`/imgs/eventos/flyers/flyer-web-esperanza.jpg`}
									alt='Picture of the author'
									width={500}
									height={250}
									className='object-cover rounded-md'
								/>
							</div>
							<div className='py-5 px-5'>
								<h2 className='text-xl text-left  text-secondary font-bold'>La Mitideología</h2>
								<p className='text-xs text-left text-[#adadad]'>18 de abril de 2022</p>
								<p className=' text-justify  text-[14px] text-[#777] my-3'>
									Ingresa La Mitideología La tauromaquia, como muchos otros festejos taurinos, se encuentran entre el rito y el
									juego; entre el espectáculo y la hazaña
								</p>
								<p className='text-primary text-left text-xs font-semibold'>Leer más »</p>
							</div>
						</article>
						<article
							style={{ boxShadow: '-14px 14px 14px -5px rgba(0,0,0,0.42)' }}
							className='max-w-[300px] mx-auto sm:mx-0 sm:max-w-none bg-white  rounded-2xl shadow-md'>
							<div className=''>
								<Image
									src={`/imgs/home/home2.jpg`}
									alt='Picture of the author'
									width={500}
									height={250}
									className='object-cover rounded-md'
								/>
							</div>
							<div className='py-5 px-5'>
								<h2 className='text-xl text-left  text-secondary font-bold'>LA TAUROMAQUIA</h2>
								<p className='text-xs text-left text-[#adadad]'>8 de abril de 2022</p>
								<p className=' text-justify  text-[14px] text-[#777] my-3'>
									Ingresa LA TAUROMAQUIA La tauromaquia, como muchos otros festejos taurinos, se encuentran entre el rito y el
									juego; entre el espectáculo y la hazaña
								</p>
								<p className='text-primary text-left text-xs font-semibold'>Leer más »</p>
							</div>
						</article>
						<article
							style={{ boxShadow: '-14px 14px 14px -5px rgba(0,0,0,0.42)' }}
							className='max-w-[300px] mx-auto sm:mx-0 sm:max-w-none bg-white  rounded-2xl shadow-md'>
							<div className=''>
								<Image
									src={`/imgs/banners/banner3.webp`}
									alt='Picture of the author'
									width={500}
									height={250}
									className='object-cover rounded-md'
								/>
							</div>
							<div className='py-5 px-5'>
								<h2 className='text-xl text-left  text-secondary font-bold'>FESTEJOS TAURINOS</h2>
								<p className='text-xs text-left text-[#adadad]'>8 de abril de 2022</p>
								<p className=' text-justify  text-[14px] text-[#777] my-3'>
									Ingresa FESTEJOS TAURINOS Con los primeros rayos del sol un anciano señala con un par de plumas de águila hacia el
									oriente. En su
								</p>
								<p className='text-primary text-left text-xs font-semibold'>Leer más »</p>
							</div>
						</article>
					</div>
				</div> */}
			</div>
		</>
	)
}

export default Home
