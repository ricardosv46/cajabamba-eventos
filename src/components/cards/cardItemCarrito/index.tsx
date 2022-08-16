import Image from 'next/image'
import React from 'react'
import IconDelete from '../../../../public/icons/IconDelete'
import IconMinus from '../../../../public/icons/IconMinus'
import IconPlus from '../../../../public/icons/IconPlus'
import { useCarritoContext } from '../../../context/cart/CarritoState'

interface upcarrito {
  id: number
  amount: number
}

interface CardItemCarritoProps {
  id: number
  img: string
  title: string
  price: number
  amount: number
  eliminarCarrito: (id: number) => void
  actualizarPrecioCarrito: (id: number, amount: number) => void
}
const CardItemCarrito = ({
  id,
  img,
  title,
  price,
  amount,
  eliminarCarrito,
  actualizarPrecioCarrito
}: CardItemCarritoProps) => {
  const incrementPrice = () => {
    actualizarPrecioCarrito(id, amount + 1)
  }
  const decrementPrice = () => {
    actualizarPrecioCarrito(id, amount > 1 ? amount - 1 : amount)
  }

  return (
    <div className='flex justify-between mt-5'>
      <div className='flex gap-x-3'>
        <div className='border flex'>
          <Image
            src={`/imgs/flyers/${img}`}
            alt='imagen'
            width={100}
            height={80}
          />
        </div>
        <div className='flex flex-col justify-between'>
          <div className=''>
            <p className='font-semibold text-primary text-lg'>
              Asiento {title}
            </p>
            <div className='flex gap-x-3 mt-1 font-bold text-primarydark'>
              <p className='text-black text-sm'>S/ {price.toFixed(2)}</p>
            </div>
          </div>

          <div className='flex  gap-x-2 '>
            <button
              className='bg-gray-200 px-2 py-1 rounded'
              onClick={decrementPrice}
            >
              <IconMinus width={10} height={10} />
            </button>
            <p className=''>{amount}</p>
            <button
              className='bg-gray-200 px-2 py-1 rounded '
              onClick={() => incrementPrice()}
            >
              <IconPlus width={10} height={10} />
            </button>
          </div>
        </div>
      </div>

      <div
        className='cursor-pointer h-full mt-2'
        onClick={() => eliminarCarrito(id)}
      >
        <IconDelete height={16} width={16} fill='red' />
      </div>
    </div>
  )
}

export default CardItemCarrito
