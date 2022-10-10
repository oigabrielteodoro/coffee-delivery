import { Address } from "src/pages/Checkout";
import { PaymentType } from "src/pages/Checkout/Payment";
import { CartItem } from "src/reducers/cart/actions";

export type Order = {
  paymentType: PaymentType;
  products: CartItem[];
  address: Address;
};

export enum ActionTypes {
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export function createNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      newOrder,
    },
  };
}
