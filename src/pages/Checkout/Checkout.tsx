import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "styled-components";
import * as zod from "zod";

import { Card } from "src/components/Card";
import { useCartContext } from "src/contexts/CartContext";
import { useOrderContext } from "src/contexts/OrderContext";

import { ItemList } from "./ItemList";
import { CheckoutForm } from "./CheckoutForm";
import { Payment } from "./Payment";

import { CheckoutContainer, FinishYourOrderContainer } from "./Checkout.styles";

const REQUIRED_FIELD_MESSAGE = "Campo obrigatório.";

const createNewOrderValidationSchema = zod.object({
  postalCode: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  street: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  number: zod
    .number({ invalid_type_error: "Apenas números." })
    .min(1, REQUIRED_FIELD_MESSAGE),
  address: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  city: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  state: zod
    .string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .max(2, "Digite a UF do estado."),
  paymentType: zod.union([
    zod.literal("CREDIT_CARD"),
    zod.literal("DEBIT_CARD"),
    zod.literal("CASH"),
  ]),
});

export type CreateNewOrderParams = zod.infer<
  typeof createNewOrderValidationSchema
>;

export type Address = Omit<CreateNewOrderParams, "paymentType">;

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();

  const { resetCart } = useCartContext();
  const { createNewOrder } = useOrderContext();

  const form = useForm<CreateNewOrderParams>({
    resolver: zodResolver(createNewOrderValidationSchema),
  });

  const { handleSubmit } = form;

  function handleFinishOrder({
    paymentType,
    ...address
  }: CreateNewOrderParams) {
    createNewOrder({
      address,
      paymentType,
    });

    resetCart();

    navigate("/success");
  }

  return (
    <FormProvider {...form}>
      <CheckoutContainer>
        <form onSubmit={handleSubmit(handleFinishOrder)}>
          <FinishYourOrderContainer>
            <h1>Complete seu pedido</h1>
            <Card
              title="Endereço de entrega"
              subTitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine color={theme.yellow} size={22} />}
            >
              <CheckoutForm />
            </Card>
            <Card
              title="Pagamento"
              subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} color={theme.purple} />}
            >
              <Payment />
            </Card>
          </FinishYourOrderContainer>
          <div>
            <h1>Cafés selecionados</h1>
            <ItemList />
          </div>
        </form>
      </CheckoutContainer>
    </FormProvider>
  );
}
