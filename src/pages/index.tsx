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
import Eventos from './eventos'

const banners = ['banner-home1', 'banner-home2', 'banner-home3', 'banner-home4']

const Home: NextPage = () => {
	const { eventos, loading } = useEventos({ estado: 'Activado', feriaId: 1 })
	const navigate = useRouter()

	return (
		<>
			<Eventos />
			{/* <OpenGraph
				title='CAJABAMBA - Incio'
				link='CAJABAMBA'
				description='Disfuta del mejor evento de la ciudad, Cajabamba, con una gran variedad de eventos, promociones y mucho más.'
				domain='cajabamba.plazaticket.com'
				img='https://cajabamba.plazaticket.com/imgs/banners/banner3.jpg'
				keywords='Entradas,Eventos,PLazas'
				url='https://cajabamba.plazaticket.com/'
			/> */}

			{/* <Swiper
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
								<div className='flex flex-col items-end text-5xl font-medium text-right text-white sm:text-6xl lg:text-8xl '>
									<h2>Vive la tradición</h2>
									<h2>Vive la magia</h2>
									<div className='mt-4 '>
										<button
											onClick={() => navigate.push('eventos')}
											className='relative py-2 pl-6 pr-12 mt-4 text-lg font-bold text-center transition-all duration-300 ease-in-out rounded-r-full shadow-2xl rounded-l-md bg-secondary hover:bg-tertiary'>
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
			</Swiper> */}
			{/* <section className='bg-fondo '>
				<div className='banner-parallax-plaza'>
					<div className='mx-auto my-0 w-[90%] xl:w-[1200px]'>
						<div className='flex flex-col py-16 md:flex-row'>
							<div className='flex items-center w-full '>
								<div className='flex flex-col gap-5 md:items-start '>
									<h1 className='text-5xl font-bold text-center text-primary '>LA PLAZA</h1>
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
										className='px-6 py-2 font-semibold text-white rounded-sm cursor-pointer bg-tertiary shadow-primary'>
										<p className='font-bold'>Conoce más</p>
									</button>
								</div>
							</div>
							<div className='relative flex w-full pl-16 sm:bg-transparent'>
								<div className='absolute right-0'></div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* <Container
				bgColor='banner banner-home6 '
				className='flex flex-col items-center justify-center py-16 lg:py-20 gap-14 lg:gap-0 lg:flex-row'>
				<div className='w-full lg:w-1/2'>
					<h2 className='text-5xl font-bold text-secondary lg:px-5 '>PRÓXIMOS EVENTOS</h2>
					<p className='pt-10 font-semibold text-white text-md lg:px-5'>
						¡Renovación, entrega, arte y clase en esta Feria de Cajabamba! Abónate y disfruta una gran feria, donde seremos testigos de
						la nueva generación de grandes toreros, así como el relevo generacional de la torería peruana.
					</p>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex justify-end'>
						<div className='flex justify-center items-center relative w-[520px] '>
							<Image className='relative cursor-pointer' src='/imgs/eventosImage.png' width={520} height={344} alt='logo' />
							<div className='absolute flex items-end justify-end w-full h-full p-5 lg:p-8 '>
								<button
									onClick={() => navigate.push(`/eventos`)}
									className={` absolute  px-4 lg:px-6 py-2 lg:py-2.5  bg-secondary border-2 border-secondary hover:bg-transparent transition-all ease-in-out duration-500 text-white font-semibold text-sm lg:text-lg rounded   `}>
									Comprar entradas
								</button>
							</div>
						</div>
					</div>

		
				</div>
			</Container> */}
			{/* <Container bgColor='bg-primarydark'>
				<div className='flex flex-col md:flex-row banner banner-parallax '>
					<div className='flex sm:bg-transparent'>
						<Image className='relative cursor-pointer' src={`/imgs/home/toro.png`} width={557} height={531} alt='logo' />
					</div>
					<div className='flex items-center flex-1 w-full bg-primarydark'>
						<div className='flex flex-col gap-10 md:items-end'>
							<h2 className='text-3xl font-bold md:text-5xl text-secondary lg:ml-7'>VENTA DE ENTRADAS</h2>
							<p className='text-lg text-gray-100 lg:ml-7 md:text-right '>
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
			</Container> */}
		</>
	)
}

export default Home
