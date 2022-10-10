import { useFormContext } from "react-hook-form";
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
  const {
    formState: { errors, isDirty },
  } = useFormContext();
  const { items, totalAmount } = useCartContext();

  const hasError = Object.keys(errors).length > 0;
  const isEmptyItems = items.length === 0;

  const isSubmitDisabled = hasError || isEmptyItems || !isDirty;

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
      <ConfirmOrderButton
        type="submit"
        variant="yellow"
        disabled={isSubmitDisabled}
      >
        Confirmar pedido
      </ConfirmOrderButton>
    </CardContainer>
  );
}
