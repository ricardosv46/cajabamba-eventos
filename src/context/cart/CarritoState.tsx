import React, { createContext, useContext, useReducer } from 'react'
import CarritoReducer from './CarritoReducer'
export interface CarritoProps {
  id: number
  img: string
  title: string
  price: number
  amount: number
  color: string
}
export interface CarritoInitialState {
  carrito: CarritoProps[]
  total: number
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export interface CarritoContextValue extends CarritoInitialState {
  addCarrito: (payload: CarritoProps) => void
  actualizarPrecioCarrito: (id: number, amount: number) => void
  eliminarCarrito: (payload: number) => void
  CalcularTotal: (payload: number) => void
}
export const initialState: CarritoInitialState = { carrito: [], total: 0 }

const CarritoContext = createContext<CarritoContextValue>(
  {} as CarritoContextValue
)

const CarritoState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CarritoReducer, initialState)

  const addCarrito = async (payload: CarritoProps) => {
    dispatch({ type: 'AddCarrito', payload })
  }
  const actualizarPrecioCarrito = async (id: number, amount: number) => {
    console.log(id, amount)
    dispatch({ type: 'UpAmount', id, amount })
  }
  const eliminarCarrito = async (payload: number) => {
    dispatch({ type: 'DeleteCarrito', payload })
  }
  const CalcularTotal = async (payload: number) => {
    dispatch({ type: 'Total', payload })
  }

  return (
    <CarritoContext.Provider
      value={{
        ...state,
        addCarrito,
        actualizarPrecioCarrito,
        eliminarCarrito,
        CalcularTotal
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarritoContext = () => useContext(CarritoContext)

export default CarritoState
