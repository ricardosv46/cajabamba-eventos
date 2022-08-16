import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import Modal from '.'
import IconDate from '../../../public/icons/IconDate'
import Asientos, { IColums } from '../asientos'

interface Props {
  onClose: () => void
  isOpen: boolean
  onClick: () => void
  tipomodal: ''
}

const ModalCompra = ({ isOpen, onClose, onClick }: Props) => {
  const [seleccionados, setSeleccionados] = useState<IColums[]>([])

  const data = [
    { fila: 'A', columnas: 62 },
    { fila: 'B', columnas: 60 },
    { fila: 'C', columnas: 58 },
    { fila: 'D', columnas: 50 },
    { fila: 'E', columnas: 45 }
  ]

  const desabilitados = ['A12', 'A57', 'A45', 'A20', 'A21']

  const total = seleccionados.reduce((previousValue, currentValue) => previousValue + currentValue.precio, 0)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className='h-full md:h-auto w-full md:w-[1000px] overflow-y-scroll no-scrollbar '>
      <section className='bg-white  rounded-lg pt-5 relative overflow-hidden'>
        <button onClick={onClose} className='absolute top-2 right-4 text-primary font-bold cursor-pointer'>
          X
        </button>
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
        <p className='text-center text-3xl text-primary font-bold'>SELECCIONA TUS ASIENTOS</p>
        <div className='flex flex-col justify-center border-b-2 border-t-2 border-primary py-5 mt-5 mx-5'>
          <div className='flex justify-end items-center gap-3'>
            <IconDate fill='#4C000C' width={20} height={20} />{' '}
            <p className='text-primary font-bold'>Sábado 23 de julio</p>
          </div>

          {/*  <Asientos
            {...{ data, desabilitados, seleccionados, setSeleccionados }}
          /> */}
        </div>
        <div className='p-5 flex gap-3'>
          <div className='flex gap-2 items-center'>
            <span className='w-2.5 h-2.5 bg-primary rounded-full'></span>
            <p className='text-tertiary'>Seleccionados</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='w-2.5 h-2.5 bg-secondary rounded-full'></span>
            <p className='text-tertiary'>Libres</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='w-2.5 h-2.5 bg-text rounded-full'></span>
            <p className='text-tertiary'>No disponibles</p>
          </div>
        </div>
        <div className='py-10 px-5 bg-secondary flex justify-between'>
          <div className='flex gap-5 items-center'>
            <p className='text-primary font-bold'>Seleccionados:</p>
            <div className='flex flex-wrap w-60 gap-2 leading-none'>
              {seleccionados.map((item) => (
                <p key={item.reservado} className='text-primary font-bold'>
                  {item.reservado}
                </p>
              ))}
            </div>
          </div>
          <div className='flex items-end'>
            <button className='bg-tertiary px-5 py-2 text-white rounded-lg mt-10 lg:mt-0'>
              COMPRAR: S/.{total.toFixed(2)}
            </button>
          </div>
        </div>
      </section>
    </Modal>
  )
}

export default ModalCompra
