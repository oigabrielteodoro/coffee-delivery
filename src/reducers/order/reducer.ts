import { produce } from "immer";

import { Action, ActionTypes, Order } from "./actions";

type OrderState = {
  order: Order;
};

export function orderReducer(state: OrderState, action: Action) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ORDER: {
      return produce(state, (draft) => {
        draft.order = action.payload.newOrder;
      });
    }
    default:
      return state;
  }
}
