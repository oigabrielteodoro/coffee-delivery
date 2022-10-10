import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Assets } from "src/assets";
import { useOrderContext } from "src/contexts/OrderContext";

import {
  Content,
  Order,
  OrderContainer,
  OrderIcon,
  SuccessContainer,
  TitleContainer,
} from "./Success.styles";

export function Success() {
  const { order } = useOrderContext();

  if (!order) {
    return <h1>Nenhum pedido encontrado</h1>;
  }

  const { address, paymentType } = order;

  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só esperar que logo o café chegará até você</h2>
      </TitleContainer>
      <Content>
        <OrderContainer>
          <Order>
            <OrderIcon color="purple">
              <MapPin size={18} weight="fill" />
            </OrderIcon>
            <span>
              Entrega em{" "}
              <b>
                {address.street}, {address.number}
              </b>
              <br />
              {address.address} - {address.city}, {address.state}
            </span>
          </Order>
          <Order>
            <OrderIcon color="yellow">
              <Timer size={18} weight="fill" />
            </OrderIcon>
            <span>
              Previsão de entrega
              <br />
              <b>20 min - 30 min</b>
            </span>
          </Order>
          <Order>
            <OrderIcon color="yellow-dark">
              <CurrencyDollar size={18} weight="fill" />
            </OrderIcon>
            <span>
              Pagamento na entrega
              <br />
              <b>{paymentType}</b>
            </span>
          </Order>
        </OrderContainer>
        <img src={Assets.ILLUSTRATION} height={250} />
      </Content>
    </SuccessContainer>
  );
}
