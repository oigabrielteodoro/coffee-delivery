import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { v4 as uuid } from "uuid";

import { Coffee } from "src/lib/Coffees";

import {
  addNewCartItemAction,
  CartItem,
  removeCartItemAction,
  updateAmountCartItemAction,
  resetCartAction,
} from "src/reducers/cart/actions";
import { cartReducer } from "src/reducers/cart/reducer";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextData = {
  items: CartItem[];
  totalAmount: number;
  getCartItem: (coffee: Coffee) => CartItem | undefined;
  incrementAmount: (coffee: Coffee) => void;
  decrementAmount: (coffee: Coffee) => void;
  removeCartItem: (product: CartItem) => void;
  createNewCartItem: (coffee: Coffee, amount: number) => void;
  resetCart: () => void;
};

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return state;
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "@coffee-delivery:cart-state-1.0.0",
      JSON.stringify(cartState)
    );
  }, [cartState]);

  function createNewCartItem(coffee: Coffee, amount: number) {
    const cartItem: CartItem = {
      id: uuid(),
      amount,
      product: coffee,
    };

    dispatch(addNewCartItemAction(cartItem));
  }

  function getCartItem(coffee: Coffee) {
    return cartState.items.find(
      (cartItem) => cartItem.product.name === coffee.name
    );
  }

  function incrementAmount(coffee: Coffee) {
    const cartItem = getCartItem(coffee) ?? {
      amount: 1,
      id: uuid(),
      product: coffee,
    };

    dispatch(updateAmountCartItemAction(cartItem, cartItem.amount + 1));
  }

  function decrementAmount(coffee: Coffee) {
    const cartItem = getCartItem(coffee);

    if (!cartItem) return;

    const newAmount = cartItem.amount - 1;

    if (newAmount === 0) {
      return dispatch(removeCartItemAction(cartItem));
    }

    if (newAmount < 0) return;

    dispatch(updateAmountCartItemAction(cartItem, newAmount));
  }

  function removeCartItem(product: CartItem) {
    dispatch(removeCartItemAction(product));
  }

  function resetCart() {
    dispatch(resetCartAction());
  }

  const totalAmount = useMemo(() => {
    return cartState.items.reduce((total, { amount }) => {
      return total + amount;
    }, 0);
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount,
        getCartItem,
        createNewCartItem,
        incrementAmount,
        decrementAmount,
        removeCartItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  return context;
}
