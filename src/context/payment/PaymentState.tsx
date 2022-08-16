import React, { createContext, useContext, useReducer } from "react";
import { IColums } from "../../components/asientos";
import PaymentReducer from "./PaymentReducer";

/* export interface PaymentProps {
  title: IColums[];
} */
export interface PaymentInitialState {
  pago: IColums[];
}

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface PaymentContextValue extends PaymentInitialState {
  EnviarPago: (payload: IColums[]) => void;
}
export const initialState: PaymentInitialState = { pago: [] };

const PaymentContext = createContext<PaymentContextValue>(
  {} as PaymentContextValue
);

const PaymentState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(PaymentReducer, initialState);
  const EnviarPago = async (payload: IColums[]) => {
    dispatch({ type: "PagoEnviar", payload });
  };

  return (
    <PaymentContext.Provider
      value={{
        ...state,
        EnviarPago,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => useContext(PaymentContext);

export default PaymentState;
