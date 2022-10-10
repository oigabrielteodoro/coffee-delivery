import { Trash } from "phosphor-react";
import { Button } from "src/components/Button";
import { CounterButton } from "src/components/Button/CounterButton";
import { useCartContext } from "src/contexts/CartContext";
import { CartItem } from "src/reducers/cart/actions";
import { useTheme } from "styled-components";
import {
  Actions,
  ItemContainer,
  ItemCostAmount,
  ItemInfo,
  RemoveButton,
} from "./Item.styles";

type Props = {
  item: CartItem;
};

export function Item({ item }: Props) {
  const theme = useTheme();

  const { removeCartItem } = useCartContext();

  function handleRemove() {
    removeCartItem(item);
  }

  return (
    <ItemContainer>
      <img src={item.product.image} />
      <ItemInfo>
        <span>{item.product.name}</span>
        <Actions>
          <CounterButton coffee={item.product} />
          <RemoveButton variant="base" type="button" onClick={handleRemove}>
            <Trash color={theme.purple} />
            Remover
          </RemoveButton>
        </Actions>
      </ItemInfo>
      <ItemCostAmount>R$ 9,90</ItemCostAmount>
    </ItemContainer>
  );
}
