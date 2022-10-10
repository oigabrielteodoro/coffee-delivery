import { CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";

import { Card } from "src/components/Card";

import { Payment } from "./Payment";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, FinishYourOrderContainer } from "./Checkout.styles";

export function Checkout() {
  const theme = useTheme();

  const form = useForm({
    defaultValues: {
      postalCode: "",
    },
  });

  return (
    <FormProvider {...form}>
      <CheckoutContainer>
        <form>
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
          </div>
        </form>
      </CheckoutContainer>
    </FormProvider>
  );
}
