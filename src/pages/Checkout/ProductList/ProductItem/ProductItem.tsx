import { Trash } from "phosphor-react";
import { Button } from "src/components/Button";
import { CounterButton } from "src/components/Button/CounterButton";
import { CartItem } from "src/reducers/cart/actions";
import { useTheme } from "styled-components";
import {
  Actions,
  ProductContainer,
  ProductCostAmount,
  ProductInfo,
  RemoveButton,
} from "./ProductItem.styles";

type Props = {
  product: CartItem;
};

export function ProductItem({ product }: Props) {
  const theme = useTheme();

  return (
    <ProductContainer>
      <img src={product.product.image} />
      <ProductInfo>
        <span>{product.product.name}</span>
        <Actions>
          <CounterButton coffee={product.product} />
          <RemoveButton variant="base">
            <Trash color={theme.purple} />
            Remover
          </RemoveButton>
        </Actions>
      </ProductInfo>
      <ProductCostAmount>R$ 9,90</ProductCostAmount>
    </ProductContainer>
  );
}
