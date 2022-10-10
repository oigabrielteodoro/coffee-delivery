import { Coffee } from "src/lib/Coffees";

export type CartItem = {
  id: string;
  amount: number;
  product: Coffee;
};

export enum ActionTypes {
  ADD_NEW_CART_ITEM = "ADD_NEW_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  UPDATE_AMOUNT_CART_ITEM = "UPDATE_AMOUNT_CART_ITEM",
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export function addNewCartItemAction(newCartItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_CART_ITEM,
    payload: {
      newCartItem,
    },
  };
}

export function removeCartItemAction(cartItem: CartItem) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      cartItem,
    },
  };
}

export function updateAmountCartItemAction(
  cartItem: CartItem,
  newAmount: number
) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_CART_ITEM,
    payload: {
      cartItem,
      newAmount,
    },
  };
}
