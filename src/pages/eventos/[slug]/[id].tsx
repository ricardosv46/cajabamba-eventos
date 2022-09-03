import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import IconDate from '../../../../public/icons/IconDate'
import Asientos, { IColums } from '../../../components/asientos'
import Container from '../../../components/container'
import { usePaymentContext } from '../../../context/payment/PaymentState'
import { genNombreFilas } from '../../../data/asientos'
import { gentituloButacas } from '../../../data/tituloButacas'
import { useAsientosEventos } from '../../../services/useAsientosEventos'
import { useBloques } from '../../../services/useBloques'
import { useButacas } from '../../../services/useButacas'
import { useEventoSlug } from '../../../services/useEventoSlug'

const Detalle = () => {
	const navigation = useRouter()
	const { EnviarPago } = usePaymentContext()
	const [seleccionados, setSeleccionados] = useState<IColums[]>([])
	const { id, slug, fecha, hora } = useRouter().query as any
	const { butacas, loading, refetch } = useButacas(id)
	const { eventoSlug, loading: loadingEvento, refetch: refetchEvento } = useEventoSlug(slug)
	const { bloques, loading: loadingBloques } = useBloques({ feriaId: 1, tendido: id })
	useEffect(() => {
		if (!loading && !loadingEvento) {
			if (eventoSlug.eventoId && butacas.length > 0) {
			} else {
				navigation.push('/eventos')
			}
		}
	}, [loading, loadingEvento])

	const { asientos, refetch: refetchAsientos } = useAsientosEventos({
		eventoId: Number(eventoSlug?.eventoId),
		tendido: id
	})
	console.log(asientos)

	const dataAsientos = useMemo(() => {
		if (butacas.length && !loading) {
			return butacas.map((item, i) => ({
				tendido: item?.tendido || '',
				butacaId: item?.butacaId || '',
				codigo: item?.codigo || '',
				cantidad: item?.cantidad || 0,
				precio: item?.precio || 0
			}))
		}
	}, [butacas, loading])

	useEffect(() => {
		refetch()
		refetchAsientos()
		refetchAsientos()
	}, [id, slug])

	const total = seleccionados.reduce((previousValue, currentValue) => previousValue + currentValue.precio, 0)

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<section className='w-full pt-5 bg-white'>
				<div className='flex justify-center mb-5'>
					<Image
						objectFit='scale-down'
						className='cursor-pointer filter-logo'
						src='/imgs/logos/logo.png'
						width={200}
						height={80}
						alt='logo'
					/>
				</div>
				<p className='text-3xl font-bold text-center text-primary'>SELECCIONA TUS ASIENTOS</p>
				<div className='flex flex-col justify-center py-5 mt-5 border-t-2 border-b-2 border-primary'>
					<div className='flex items-center justify-between px-3 lg:px-8'>
						<p className='text-base font-bold  text-primary lg:text-xl'>{gentituloButacas(id)}</p>
						<div className='flex items-center gap-3'>
							<IconDate fill='#4C000C' width={20} height={20} />
							<p className='text-xs font-bold text-primary lg:text-base'>{moment(eventoSlug?.fecha).format('LL')}</p>
						</div>
					</div>
					{dataAsientos?.length && (
						<Asientos
							{...{
								bloques,
								data: dataAsientos,
								desabilitados: asientos,
								seleccionados,
								setSeleccionados,
								nombreFilas: genNombreFilas(id)
							}}
							tipo='evento'
							evento={Number(eventoSlug?.eventoId)}
							doble={id === 'T2S' ? 'Tendido2' : id === 'T3' ? 'Tendido3' : 'Ruedo'}
							direccion={id === 'T3A' ? 'end' : id === 'T3B' ? 'start' : 'center'}
							id={id}
						/>
					)}
				</div>
				<div className='flex gap-3 p-5 text-sm lg:text-base'>
					<div className='flex items-center gap-2'>
						<span className='w-2.5 h-2.5 bg-primary rounded-full'></span>
						<p className='text-tertiary'>Seleccionados</p>
					</div>
					<div className='flex items-center gap-2'>
						<span className='w-2.5 h-2.5 bg-secondary rounded-full'></span>
						<p className='text-tertiary'>Libres</p>
					</div>
					<div className='flex items-center gap-2'>
						<span className='w-2.5 h-2.5 bg-text rounded-full'></span>
						<p className='text-tertiary'>No disponibles</p>
					</div>
				</div>
			</section>
			<div className='flex justify-center w-full  bg-secondary'>
				<div className='py-10 px-5 max-w-[1200px] flex flex-col lg:flex-row justify-between w-full'>
					<div className='flex flex-col items-center gap-5 lg:flex-row'>
						<p className='font-bold text-primary'>Seleccionados:</p>
						<div className='flex flex-wrap gap-2 leading-none lg:grid lg:grid-cols-10'>
							{seleccionados.map((item) => (
								<p key={item.reservado} className='text-xs font-bold text-primary'>
									{item.reservado}
								</p>
							))}
						</div>
					</div>
					<div className='flex items-end'>
						<button
							disabled={seleccionados.length === 0}
							className='px-5 py-2 mt-10 text-white rounded-lg bg-tertiary lg:mt-0'
							onClick={() => {
								navigation.push({
									pathname: '/check-out/',
									query: { name: 'evento', fecha, hora, id }
								})
								EnviarPago(seleccionados)
							}}>
							COMPRAR: S/.{total.toFixed(2)}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Detalle
