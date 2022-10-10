import { Minus, Plus } from "phosphor-react";
import { useCartProvider } from "src/contexts/CartContext";
import { Coffee } from "src/lib/Coffees";
import { Button, CounterContainer } from "./CounterButton.styles";

type Props = {
  coffee: Coffee;
};

export function CounterButton({ coffee }: Props) {
  const { incrementAmount, decrementAmount, getCartItem } = useCartProvider();

  const amount = getCartItem(coffee)?.amount ?? 0;

  function handleIncrementAmount() {
    incrementAmount(coffee);
  }

  function handleDecrementAmount() {
    decrementAmount(coffee);
  }

  return (
    <CounterContainer>
      <Button onClick={handleDecrementAmount}>
        <Minus size={14} weight="bold" />
      </Button>
      <span>{amount ?? 0}</span>
      <Button onClick={handleIncrementAmount}>
        <Plus size={14} weight="bold" />
      </Button>
    </CounterContainer>
  );
}
