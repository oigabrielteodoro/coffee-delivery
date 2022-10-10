import { useCartProvider } from "src/contexts/CartContext";

import { Item } from "./Item";
import {
  CardContainer,
  ListContainer,
  ConfirmOrderButton,
  TotalContainer,
  Total,
} from "./ItemList.styles";

export function ItemList() {
  const { items } = useCartProvider();

  return (
    <CardContainer>
      <ListContainer>
        {items.map((item) => (
          <Item key={item.id} item={item} />
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
