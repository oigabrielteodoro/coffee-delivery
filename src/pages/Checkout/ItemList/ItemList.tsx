import { useCartContext } from "src/contexts/CartContext";
import { toCurrency } from "src/lib/Money";

import { Item } from "./Item";
import {
  CardContainer,
  ListContainer,
  ConfirmOrderButton,
  TotalContainer,
  Total,
} from "./ItemList.styles";

// R$ 3,50
const DELIVERY_TAX = 350;

export function ItemList() {
  const { items, totalAmount } = useCartContext();

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
          <span>{toCurrency(totalAmount)}</span>
        </Total>
        <Total>
          <span>Entrega</span>
          <span>{toCurrency(DELIVERY_TAX)}</span>
        </Total>
        <Total>
          <strong>Total</strong>
          <strong>{toCurrency(totalAmount + DELIVERY_TAX)}</strong>
        </Total>
      </TotalContainer>
      <ConfirmOrderButton type="submit" variant="yellow">
        Confirmar pedido
      </ConfirmOrderButton>
    </CardContainer>
  );
}
