import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { Button } from "src/components/Button";
import { toCurrency } from "src/lib/Money";
import { Coffee, coffeeTypeDictionary } from "src/lib/Coffees";

import {
  Card,
  Image,
  Description,
  Title,
  TypeBadge,
  TypeList,
  CartContainer,
  Price,
  Actions,
} from "./CoffeeCard.styles";
import { useCartContext } from "src/contexts/CartContext";
import { CounterButton } from "src/components/Button/CounterButton";

type Props = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: Props) {
  const { createNewCartItem, getCartItem } = useCartContext();

  const amount = getCartItem(coffee)?.amount;

  function handleCreateNewCartItem() {
    createNewCartItem(coffee, amount ?? 1);
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
          <CounterButton coffee={coffee} />
          <Button variant="purple-dark" onClick={handleCreateNewCartItem}>
            <ShoppingCart size={20} weight="fill" />
          </Button>
        </Actions>
      </CartContainer>
    </Card>
  );
}
