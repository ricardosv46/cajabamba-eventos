import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import CardItemCarrito from '../cards/cardItemCarrito'
import { useCarritoContext } from '../../context/cart/CarritoState'
interface SidebarCartProps {
  isOpen: boolean
  onClose: () => void
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: { opacity: 1, pointerEvents: 'unset' },
  closed: { opacity: 0, pointerEvents: 'none' }
} as const

const SidebarCart = ({ isOpen = false, onClose }: SidebarCartProps) => {
  const { carrito, eliminarCarrito, actualizarPrecioCarrito } =
    useCarritoContext()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, product) => total + product.amount * product.price,
      0
    )
    setTotal(calculoTotal)
  }, [carrito])
  return (
    <div className='absolute top-0 text-primary-800   h-screen md:left-auto md:bottom-px z-40'>
      <motion.div
        variants={fade}
        onClick={onClose}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        className='fixed top-0   w-full h-screen bg-black bg-opacity-50 '
      />
      <motion.div
        variants={variants}
        className='fixed top-0 left-0 z-50 h-screen  '
        initial={{ opacity: 0 }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className='text-primary-600 w-[340px]  bg-white  min-h-screen border-r '>
          <div className='flex flex-col w-full bg-white  py-6  h-screen'>
            <div className='flex justify-between items-center  px-5'>
              <h2 className='uppercase font-bold text-primary'>Mi carrito</h2>
              <p
                className='font-bold text-black cursor-pointer'
                onClick={onClose}
              >
                Seguir comprando
              </p>
            </div>

            {carrito.length ? (
              <div className='mt-5 h-full scroll overflow-y-scroll px-3 pb-24'>
                <div>
                  {carrito.map((item) => (
                    <CardItemCarrito
                      key={item.id}
                      {...item}
                      eliminarCarrito={eliminarCarrito}
                      actualizarPrecioCarrito={actualizarPrecioCarrito}
                    />
                  ))}
                </div>

                <div className='fixed left-0 bg-white bottom-0 w-full p-3'>
                  <div className='flex justify-between mb-4 '>
                    <p className='font-semibold text-lg text-primary'>
                      Subtotal
                    </p>
                    <p className='font-bold text-black'>
                      S/ {total.toFixed(2)}
                    </p>
                  </div>
                  <div className='flex flex-col gap-y-3 '>
                    <button className='bg-primarydark text-sm text-white font-bold py-2 px-4 rounded w-full uppercase'>
                      Finalizar compra
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center mt-7'>
                <IconCart width={35} height={35} />
                <p className='text-center text-sm mt-2'>
                  Tu carrito de compras está vacío.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default SidebarCart
