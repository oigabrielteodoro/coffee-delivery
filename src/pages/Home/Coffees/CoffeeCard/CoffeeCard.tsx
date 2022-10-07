import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Button } from "../../../../components/Button";

import { Coffee, coffeeTypeDictionary } from "../../../../lib/Coffees";
import { toCurrency } from "../../../../lib/Money";
import {
  Card,
  Image,
  Description,
  Title,
  TypeBadge,
  TypeList,
  CartContainer,
  Price,
  CounterContainer,
  CounterButton,
  Actions,
} from "./CoffeeCard.styles";

type Props = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: Props) {
  const [amount, setAmount] = useState(1);

  function handleIncrementAmount() {
    setAmount((state) => state + 1);
  }

  function handleDecrementAmount() {
    setAmount((state) => (state > 1 ? state - 1 : state));
  }

  return (
    <Card>
      <Image src={coffee.image} />
      <TypeList>
        {coffee.type.map((type) => (
          <TypeBadge key={`${coffee.name}-${type}`}>
            {coffeeTypeDictionary[type]}
          </TypeBadge>
        ))}
      </TypeList>
      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>
      <CartContainer>
        <Price>{toCurrency(coffee.costAmount)}</Price>
        <Actions>
          <CounterContainer>
            <CounterButton onClick={handleDecrementAmount}>
              <Minus size={14} weight="bold" />
            </CounterButton>
            <span>{amount}</span>
            <CounterButton onClick={handleIncrementAmount}>
              <Plus size={14} weight="bold" />
            </CounterButton>
          </CounterContainer>
          <Button variant="purple-dark">
            <ShoppingCart size={20} weight="fill" />
          </Button>
        </Actions>
      </CartContainer>
    </Card>
  );
}
