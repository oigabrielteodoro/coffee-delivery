import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { createNewOrderAction, Order } from "src/reducers/order/actions";
import { orderReducer } from "src/reducers/order/reducer";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextData = {
  order: Order;
  createNewOrder: (order: Order) => void;
};

const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      items: [],
    },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:order-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return state;
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "@coffee-delivery:order-state-1.0.0",
      JSON.stringify(orderState)
    );
  }, [orderState]);

  function createNewOrder(order: Order) {
    dispatch(createNewOrderAction(order));
  }

  return (
    <OrderContext.Provider
      value={{
        order: orderState.order,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = useContext(OrderContext);

  return context;
}
