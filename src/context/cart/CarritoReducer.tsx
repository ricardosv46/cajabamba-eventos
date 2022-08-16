import { CarritoInitialState, CarritoProps } from './CarritoState'

type Action =
  | { type: 'AddCarrito'; payload: CarritoProps }
  | { type: 'UpAmount'; id: number; amount: number }
  | { type: 'DeleteCarrito'; payload: number }
  | { type: 'Total'; payload: number }

const CarritoReducer = (state: CarritoInitialState, action: Action): CarritoInitialState => {
  switch (action.type) {
    case 'AddCarrito':
      if (state.carrito.some(({ id }) => id === action.payload.id)) {
        return state
      } else {
        return {
          ...state,
          carrito: [...state.carrito, action.payload]
        }
      }
    case 'UpAmount':
      return {
        ...state,
        carrito: state.carrito.map((item) => (item.id === action.id ? { ...item, amount: action.amount } : item))
      }
    case 'DeleteCarrito':
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload)
      }
    case 'Total':
      return {
        ...state,
        total: action.payload
      }
    default:
      return state
  }
}

export default CarritoReducer
