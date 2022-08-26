import { Console } from 'console'
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import IconRuedo from '../../../public/icons/IconRuedo'

import IconSearchMinus from '../../../public/icons/IconSearchMinus'
import IconSearchPlus from '../../../public/icons/IconSearchPlus'
import { gentamañosbutacas } from '../../data/gentamañosbutacas'
import Zoom from '../zoom'
interface IProps {
	bloques: any[]
	data: Filas[]
	seleccionados: IColums[]
	setSeleccionados: Dispatch<SetStateAction<IColums[]>>
	desabilitados: any[]
	nombreFilas: string[]
	doble?: 'Ruedo' | 'Tendido2' | 'Tendido3'
	direccion?: 'start' | 'center' | 'end'
	tipo: 'abono' | 'evento'
	evento?: number
	id: string
}

interface Filas {
	tendido: string
	butacaId: string
	codigo: string
	cantidad: number
	precio: number
}

export interface IColums {
	reservado: string
	asiento: string
	precio: number
	codigo: string
	tendido: string
	feriaId: number
	eventoId?: number
}

const Asientos = ({
	seleccionados,
	setSeleccionados,
	data,
	desabilitados,
	bloques,
	nombreFilas,
	direccion = 'center',
	doble = 'Ruedo',
	tipo,
	evento,
	id
}: IProps) => {
	const filas = useMemo(() => {
		let tfilas: any = {}
		for (let i = 0; i < data.length; i++) {
			const fila = data[i].codigo
			const precio = data[i].precio
			const tendido = data[i].tendido

			tfilas[data[i].codigo] = new Array(data[i].cantidad).fill(null).map((_, i) => {
				const numberId = id.includes('P') ? (i + 1) * 2 : i * 2 + 1
				return {
					reservado: `${fila}-${numberId}`,
					asientoId: numberId.toString(),
					tendido: tendido,
					codigo: fila,
					asiento: numberId,
					precio: precio,
					feriaId: 1,
					eventoId: evento ? evento : 0
				}
			})
		}
		return tfilas
	}, [])

	const selectId = (itemselected: IColums) => {
		const validar = seleccionados.some((item) => item.reservado === itemselected.reservado)
		if (validar) {
			const newids = seleccionados.filter((item) => item.reservado !== itemselected.reservado)
			setSeleccionados(newids)
		} else {
			setSeleccionados([...seleccionados, itemselected])
		}
	}

	useEffect(() => {
		const newids = seleccionados.filter((seleccionado) => {
			const desabilitado = desabilitados.some((desabilitado) => desabilitado?.reservado === seleccionado?.reservado)
			return !desabilitado
		})
		setSeleccionados(newids)
	}, [desabilitados])

	console.log({ bloques })

	return (
		<Zoom id={id}>
			<div className='flex flex-col items-center justify-center w-full gap-1 px-5 py-16'>
				{Object.keys(filas).map((fila, index) => {
					console.log(fila)
					const isFilaL = fila === 'T1I-F01' || fila === 'T1I-F02' || fila === 'T1I-F03' || fila === 'T1I-F04'
					const isFilaR = fila === 'T4P-F01' || fila === 'T4P-F02' || fila === 'T4P-F03' || fila === 'T4P-F04'
					const isPreferencial = fila.includes('P02')
					const reverse =
						data[index].tendido === 'T1P' ||
						data[index].tendido === 'T2P' ||
						data[index].tendido === 'T3P' ||
						data[index].tendido === 'T4P'

					return (
						<div key={fila} className='flex items-center justify-center w-full gap-5'>
							<div className='text-right w-36'>
								<p className={`text-[12px] text-primary font-semibold ${isPreferencial && 'pt-10'}`}>{nombreFilas[index]}</p>
							</div>
							<div
								className={`flex  justify-${direccion} items-center gap-x-1.5  ${
									id === 'T1P'
										? 'w-[800px]'
										: id === 'T1I'
										? 'w-[1600px]'
										: id === 'T2P'
										? 'w-[1800px]'
										: id === 'T2I'
										? 'w-[790px]'
										: id === 'T3P'
										? 'w-[1050px]'
										: id === 'T3I'
										? 'w-[1750px]'
										: id === 'T4P'
										? 'w-[1160px]'
										: id === 'T4I'
										? 'w-[820px]'
										: 'w-full'
								} px-5  ${reverse && 'flex-row-reverse'} ${isFilaL && 'pl-44'} ${isFilaR && 'pr-44'} ${isPreferencial && 'pt-10'} `}>
								{filas[`${fila.toString()}`].map(
									({ reservado, precio, asiento, codigo, feriaId, tendido, eventoId }: IColums, index: any) => {
										if (index < asiento) {
											const isVacio = codigo === 'T1P-P01' || codigo === 'T1P-P02' ? (asiento == '28' ? true : false) : false

											const isActive = seleccionados.some((seleccionado) => seleccionado.reservado === reservado)

											const bloqueados = bloques.some((_item) => _item?.reservado === reservado)

											const disabled = desabilitados.some((_item) => _item?.reservado === reservado)
											return (
												<button
													id={reservado}
													key={reservado}
													onClick={() => {
														if (tipo === 'abono') {
															selectId({
																reservado,
																precio,
																asiento: asiento.toString(),
																codigo,
																feriaId,
																tendido
															})
														}
														if (tipo === 'evento') {
															selectId({
																reservado,
																precio,
																asiento: asiento.toString(),
																codigo,
																feriaId,
																tendido,
																eventoId
															})
														}
													}}
													disabled={disabled || bloqueados}
													className={`rounded-full  h-4 w-4  font-semibold  flex justify-center items-center ${
														isVacio && 'ml-5'
													}  ${
														bloqueados
															? 'bg-white text-white'
															: disabled
															? 'bg-text text-white'
															: isActive
															? 'bg-butacas text-white'
															: 'bg-yellow-500  text-primary'
													}`}>
													<p className='text-[7px] leading-0'>{asiento}</p>
												</button>
											)
										} else return null
									}
								)}
							</div>
							<div className='w-36'>
								<p className={`text-[12px] text-primary font-semibold ${isPreferencial && 'pt-10'} `}>{nombreFilas[index]}</p>
							</div>
						</div>
					)
				})}
				<div
					className={`${
						id === 'T1P'
							? 'w-[760px]'
							: id === 'T1I'
							? 'w-[1560px]'
							: id === 'T2P'
							? 'w-[1760px]'
							: id === 'T2I'
							? 'w-[750px]'
							: id === 'T3P'
							? 'w-[1010px]'
							: id === 'T3I'
							? 'w-[1710px]'
							: id === 'T4P'
							? 'w-[1110px]'
							: id === 'T4I'
							? 'w-[780px]'
							: 'w-full'
					} h-14 overflow-hidden relative mt-5 mx-auto`}>
					{doble === 'Tendido3' && (
						<div className='flex justify-between gap-5'>
							<div className='w-full bg-text h-9'>
								<p className='flex items-center justify-center w-full h-full text-white '>TENDIDO 3B</p>
							</div>
							<div className='w-full bg-text h-9'>
								<p className='flex items-center justify-center w-full h-full text-white '>TENDIDO 3A</p>
							</div>
						</div>
					)}
					{doble === 'Tendido2' && (
						<div className='flex'>
							<div className='w-full bg-text h-9'>
								<p className='flex items-center justify-center w-full h-full text-white '>TENDIDO 2 BAJO</p>
							</div>
						</div>
					)}
					{doble === 'Ruedo' && (
						<>
							<svg viewBox='0 0 500 150' preserveAspectRatio='none' className='w-full h-full'>
								<path
									d='M0.00,49.98 C-71.95,55.77 250.27,-17.25 500.00,49.98 L500.00,120.00 L-0.27,117.94 Z'
									className='fill-text '></path>
							</svg>
							<div className='absolute top-0 flex items-center justify-center w-full h-full text-white '>RUEDO</div>
						</>
					)}
				</div>
			</div>
		</Zoom>
	)
}

export default Asientos

{
	/* <div className='flex justify-end w-full gap-3 pt-2'>
					<button onClick={() => {}}>
						<IconSearchPlus fill='#4C000C' width={20} height={20}></IconSearchPlus>
					</button>
					<button onClick={() => {}}>
						<IconSearchMinus fill='#4C000C' width={20} height={20}></IconSearchMinus>
					</button>
				</div> */
}
