import { IColums } from "../../components/asientos";
import { PaymentInitialState } from "./PaymentState";

type Action = { type: "PagoEnviar"; payload: IColums[] };

const PaymentReducer = (
  state: PaymentInitialState,
  action: Action
): PaymentInitialState => {
  switch (action.type) {
    case "PagoEnviar":
      return {
        ...state,
        pago: action.payload,
      };
    default:
      return state;
  }
};

export default PaymentReducer;
