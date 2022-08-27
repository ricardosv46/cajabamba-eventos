import React, { useEffect, useState } from 'react'
import { FormikErrors, FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import IconShield from '../../../public/icons/IconShield'
import InputFloat from '../inputs/InputFloat'
import ModalPayme from '../ModalPayme'
import useToggle from '../../hooks/useToggle'
import { payRequest } from '../../data/paydata'
import { usePaymentContext } from '../../context/payment/PaymentState'
import { usePedidoEvento } from '../../services/usePedidoEvento'
import { usePedidoAbonado } from '../../services/usePedidoAbonado'
import moment from 'moment'
import { useRouter } from 'next/router'
import { isEmpty } from '../../utils/isEmpty'
import ModalLoading from '../modal/modalLoading'

interface Props {
	isAbono: boolean
	onSubmit: (res: { ok?: boolean; error?: string }) => void
	desabilitados: any[]
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const fecha = moment().format('YYYY-MM-DD')

const validate = async (values: FormikValues) => {
	let errors: FormikErrors<FormikValues> = {}

	const isDNI = values.tipoComprobante === 'Boleta'
	const isRUC = values.tipoComprobante === 'Factura'

	if (isDNI) {
		if (isEmpty(values.documento)) {
			errors.documento = 'El DNI es requerido'
		}

		if (values.documento.length !== 8) {
			errors.documento = 'El DNI debe tener 8 dígitos'
		}
	}

	if (isRUC) {
		if (isEmpty(values.documento)) {
			errors.documento = 'El RUC es requerido'
		}

		if (values.documento.length !== 11) {
			errors.documento = 'El RUC debe tener 11 dígitos'
		}

		if (isEmpty(values.razonSocial)) {
			errors.razonSocial = 'La Razon Social es requerida'
		}
	}

	return errors
}

export const FormPayAuth = ({ isAbono, onSubmit, desabilitados, isOpen, onOpen, onClose }: Props) => {
	const { pago, EnviarPago } = usePaymentContext()
	const [isChecked, setIsChecked] = useState(false)

	const navigation = useRouter()
	const { createPedidoEvento, loadingCreate: loadingCreateAbonado } = usePedidoEvento()
	const { createPedidoAbonado, loadingCreate: loadingCreateEvento } = usePedidoAbonado()
	const user = JSON.parse(localStorage.getItem('user') as any)

	const handleOnChangeCheckBox = () => {
		setIsChecked(!isChecked)
	}

	const handlePay = async () => {
		if (isAbono) {
			const res = await createPedidoAbonado({
				input1: {
					transaccionId: 12345,
					precioTotal: total,
					fechaPedido: fecha,
					numeroComprobante: values.documento,
					tipoComprobante: values.tipoComprobante,
					razonSocial: values.tipoComprobante === 'Factura' ? values?.razonSocial : `${user?.nombres} ${user?.apellidos}`
				},
				input2: pago,
				input3: {}
			})

			onSubmit(res)
		}

		if (!isAbono) {
			const res = await createPedidoEvento({
				input1: {
					transaccionId: 12345,
					precioTotal: total,
					fechaPedido: fecha,
					numeroComprobante: values.documento,
					tipoComprobante: values.tipoComprobante,
					razonSocial: values.tipoComprobante === 'Factura' ? values?.razonSocial : `${user?.nombres} ${user?.apellidos}`
				},
				input2: pago,
				input3: {}
			})

			onSubmit(res)
		}
	}

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		validate,
		onSubmit: handlePay,
		initialValues: {
			tipoComprobante: 'Boleta',
			documento: '',
			razonSocial: ''
		}
	})

	const total = pago.reduce((prev, curr) => prev + curr.precio, 0)

	useEffect(() => {
		const desabilitado = pago.map((seleccionado) => desabilitados.some((desabilitado) => desabilitado?.reservado === seleccionado?.reservado))[0]

		if (desabilitados) {
			onClose()
		}
		setIsChecked(!desabilitado)

		if (pago?.length < 1) {
			navigation.back()
		}
	}, [desabilitados, pago])

	return (
		<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8 lg:grid-cols-2'>
			<ModalLoading isOpen={loadingCreateAbonado || loadingCreateEvento} />
			{/* <ModalPayme
				isOpen={isOpen}
				onClose={onClose}
				onChange={handlePay}
				payload={payRequest({
					amount: total,
					first_name: user?.nombres || '',
					last_name: user?.apellidos || '',
					email: user?.email || '',
					subscriber: user?.celular || '999999999',
					identity_document_identifier: user.documento || values?.documento
				})}
			/> */}

			<div className='grid h-auto grid-cols-1 gap-6 sm:grid-cols-2'>
				<select
					name='tipoComprobante'
					className='rounded-md h-[50px] px-3 border border-gray-300 '
					value={values.tipoComprobante}
					onChange={handleChange}
					onBlur={handleBlur}>
					<option className='' value='Boleta'>
						Boleta
					</option>
					<option className='' value='Factura'>
						Factura
					</option>
				</select>

				<div className='relative'>
					<InputFloat
						type='text'
						label={values.tipoComprobante === 'Factura' ? 'RUC' : 'DNI'}
						name='documento'
						value={values.documento}
						onChange={handleChange}
						onBlur={handleBlur}
						maxLength={values.tipoComprobante === 'Factura' ? 11 : 8}
					/>
					{errors.documento && touched.documento ? (
						<p className='text-red-500 leading-5 absolute top-[50px] text-sm px-1 '>{errors.documento}</p>
					) : null}
				</div>

				{values.tipoComprobante === 'Factura' && (
					<div className='relative'>
						<InputFloat
							type='text'
							label='Razon Social'
							name='razonSocial'
							value={values.razonSocial}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.razonSocial && touched.razonSocial ? (
							<p className='absolute px-1 text-sm leading-5 text-red-500 -bottom-5 '>{errors.razonSocial}</p>
						) : null}
					</div>
				)}
				{values.tipoComprobante === 'Factura' && <div></div>}

				<div className='flex items-center gap-x-2'>
					<input type='checkbox' id='topping' name='topping' value='Terminos' checked={isChecked} onChange={handleOnChangeCheckBox} />

					<p className='text-xs cursor-pointer hover:underline hover:text-secondary' onClick={() => window.open('/terminosycondiciones')}>
						Acepto los términos y condiciones
					</p>
				</div>

				<div className='flex items-center justify-start gap-2 '>
					<IconShield width={20} height={20} fill='#F0AC42' />
					<p className='text-md text-[#F0AC42] font-bold'>Compra Segura</p>
				</div>
			</div>
			<div>
				<div className='flex justify-end mb-10'>
					<p className='w-[300px] text-xl font-bold'>Nro de entradas</p>
					<p className='text-xl font-bold'>{pago.length}</p>
				</div>
				{pago.map((item) => {
					const desabilitado = desabilitados.some((desabilitado) => desabilitado?.reservado === item?.reservado)

					const newtiems = pago.filter((seleccionado) => seleccionado.reservado !== item.reservado)

					const removeItem = () => {
						EnviarPago(newtiems)
					}

					return (
						<div key={item.reservado} className='relative'>
							<div className='flex justify-between w-full gap-40 pl-20'>
								<p className='mt-2 text-xs leading-none '>1 x ABONO – {item.reservado}</p>
								<p className='font-bold leading-none text-md'>S/{item.precio.toFixed(2)}</p>
							</div>
							<div className='flex justify-between w-full gap-40 pl-20 leading-none'>
								<p className='text-xs leading-none text-red-500 left-5'>
									{desabilitado ? 'No disponible por favor vuleva a seleccionar' : ''}
								</p>
							</div>
							{desabilitado && (
								<button className='absolute text-red-500 -top-0 -right-5' onClick={removeItem}>
									X
								</button>
							)}
						</div>
					)
				})}
				<div className='flex items-center justify-end mt-10 text-2xl font-bold'>
					<p className='w-[200px] '>Total</p>
					<p>S/{total.toFixed(2)}</p>
				</div>

				<div className='flex items-center justify-end w-full mt-5 gap-x-4 '>
					<div className='mt-1'>
						<Image src='/imgs/detalle/tarjetas-credito.png' alt='Picture of the author' width={110} height={30} />
					</div>

					<button
						disabled={!isChecked}
						type='submit'
						className={`bg-[#a02e2b] text-white  py-1.5 px-5 sm:px-10 hover:opacity-75 transition-all duration-500 rounded-md ${
							!isChecked ? 'opacity-50' : 'opacity-100'
						} `}>
						Ir a Pagar
					</button>
				</div>
			</div>
		</form>
	)
}
