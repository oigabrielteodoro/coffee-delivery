import { CurrencyDollar, MapPin } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "styled-components";
import * as zod from "zod";

import { Card } from "src/components/Card";

import { Payment, PaymentType } from "./Payment";
import { ProductList } from "./ProductList";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, FinishYourOrderContainer } from "./Checkout.styles";
import { useOrderContext } from "src/contexts/OrderContext";
import { useCartProvider } from "src/contexts/CartContext";

const REQUIRED_FIELD_MESSAGE = "Campo obrigatório.";

const addressValidationSchema = zod.object({
  postalCode: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  street: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  number: zod
    .number({ invalid_type_error: "Apenas números." })
    .min(1, REQUIRED_FIELD_MESSAGE),
  details: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  address: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  city: zod.string().min(1, REQUIRED_FIELD_MESSAGE),
  state: zod
    .string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .max(2, "Digite a UF do estado."),
});

export type Address = zod.infer<typeof addressValidationSchema>;

type FinishYourOrderParams = Address & {
  paymentType: PaymentType;
};

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();

  const { items, resetCart } = useCartProvider();
  const { createNewOrder } = useOrderContext();

  const form = useForm<FinishYourOrderParams>({
    resolver: zodResolver(addressValidationSchema),
  });

  const { handleSubmit } = form;

  function handleFinishOrder({
    paymentType,
    ...address
  }: FinishYourOrderParams) {
    createNewOrder({
      address,
      paymentType,
      products: items,
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
              icon={<MapPin color={theme.yellow} size={22} />}
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
            <ProductList />
          </div>
        </form>
      </CheckoutContainer>
    </FormProvider>
  );
}
