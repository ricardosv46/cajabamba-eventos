import Image from 'next/image'
import * as ReactDOM from 'react-dom'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import Modal from '.'
import IconDate from '../../../public/icons/IconDate'
import Asientos, { IColums } from '../asientos'
import Spinner from '../spinner'

interface Props {

  isOpen: boolean
}

const ModalLoading = ({ isOpen }: Props) => {


  return (
    <Modal isOpen={isOpen} >
        <div  className='bg-white  rounded-2xl pt-10 relative px-10'>
          <h1 className='text-primary text-xl font-bold'>Procesando Pago</h1>
          <Spinner/>
        </div>
    </Modal>
  )
}

export default ModalLoading
