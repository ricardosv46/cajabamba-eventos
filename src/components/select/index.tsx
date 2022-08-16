import React, { ChangeEvent, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
	value: string
	label: string
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
	data: Options[]
}

interface Options {
	value: string
	titulo: string
}

const Select = ({
	value,
	label,
	onChange,
	data,

	...props
}: IProps) => {
	return (
		<div className='relative w-full '>
			<select
				{...props}
				className='w-full block px-2 bg-transparent  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 focus:outline-none focus:ring-0 focus:border-primary peer rounded-md'
				value={value}
				onChange={onChange}>
				<option value='' hidden></option>
				{data.map((item) => (
					<option key={item.value} value={item.value}>
						{item.titulo}
					</option>
				))}
			</select>

			<label
				className={`${
					value?.length ? 'top-0' : 'top-4 text-base'
				} absolute text-sm text-primary bg-white z-10 font-semibold duration-300 transform left-2.5 leading-5 -translate-y-4 scale-75 top-4  origin-[0]  peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4`}>
				{label}
			</label>
		</div>
	)
}

export default Select
