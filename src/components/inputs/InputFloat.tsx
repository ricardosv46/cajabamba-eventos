import React, { ChangeEvent, InputHTMLAttributes } from 'react'
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	value: string
	name: string
	className?: string
	type?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputFloat = ({ label, value, name, onChange, className = 'w-full', type = 'text', ...props }: IProps) => {
	return (
		<>
			<div className='relative '>
				<input
					type={type}
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					className={`${className} block px-2.5  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer rounded-md`}
					placeholder=' '
					{...props}
				/>
				<label
					htmlFor={name}
					className='absolute text-sm text-gray-500 font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4'>
					{label}
				</label>
			</div>
		</>
	)
}

export default InputFloat
