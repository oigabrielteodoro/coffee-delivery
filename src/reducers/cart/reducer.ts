import { produce } from "immer";

import { Action, ActionTypes, CartItem } from "./actions";

type CartState = {
  items: CartItem[];
};

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART_ITEM: {
      const currentCartItemIndex = state.items.findIndex((cartItem) => {
        return (
          cartItem.product.name === action.payload.newCartItem.product.name
        );
      });

      if (currentCartItemIndex >= 0) {
        return produce(state, (draft) => {
          draft.items[currentCartItemIndex].amount += 1;
        });
      }

      return produce(state, (draft) => {
        draft.items.push(action.payload.newCartItem);
      });
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (cartItem) => cartItem.id !== action.payload.cartItem.id
        );
      });
    }
    case ActionTypes.UPDATE_AMOUNT_CART_ITEM: {
      const currentCartItemIndex = state.items.findIndex((cartItem) => {
        return cartItem.id === action.payload.cartItem.id;
      });

      if (currentCartItemIndex < 0) {
        return produce(state, (draft) => {
          draft.items.push(action.payload.cartItem);
        });
      }

      return produce(state, (draft) => {
        draft.items[currentCartItemIndex].amount = action.payload.newAmount;
      });
    }
    default:
      return state;
  }
}
