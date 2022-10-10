import { useCartProvider } from "src/contexts/CartContext";

import { ProductItem } from "./ProductItem";
import {
  CardContainer,
  ListContainer,
  ConfirmOrderButton,
  TotalContainer,
  Total,
} from "./ProductList.styles";

export function ProductList() {
  const { items } = useCartProvider();

  return (
    <CardContainer>
      <ListContainer>
        {items.map((cartItem) => (
          <ProductItem key={cartItem.id} product={cartItem} />
        ))}
      </ListContainer>
      <TotalContainer>
        <Total>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </Total>
        <Total>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </Total>
        <Total>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </Total>
      </TotalContainer>
      <ConfirmOrderButton type="submit" variant="yellow">
        Confirmar pedido
      </ConfirmOrderButton>
    </CardContainer>
  );
}
