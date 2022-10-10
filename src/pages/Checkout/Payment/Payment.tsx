import { useState } from "react";
import { CreditCard, Bank, Money } from "phosphor-react";
import { useTheme } from "styled-components";

import { PaymentButton, PaymentContainer } from "./Payment.styles";

type PaymentType = "CREDIT_CARD" | "DEBIT_CARD" | "CASH";

export function Payment() {
  const theme = useTheme();

  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PaymentType | null>(null);

  const isCash = selectedPaymentType === "CASH";
  const isDebitCard = selectedPaymentType === "DEBIT_CARD";
  const isCreditCard = selectedPaymentType === "CREDIT_CARD";

  const defaultVariant = "base";
  const activeVariant = "purple-light-bordered";

  return (
    <PaymentContainer>
      <PaymentButton
        type="button"
        disabled={isCreditCard}
        variant={isCreditCard ? activeVariant : defaultVariant}
        onClick={() => setSelectedPaymentType("CREDIT_CARD")}
      >
        <CreditCard size={16} color={theme.purple} />
        Cartão de crédito
      </PaymentButton>
      <PaymentButton
        type="button"
        disabled={isDebitCard}
        variant={isDebitCard ? activeVariant : defaultVariant}
        onClick={() => setSelectedPaymentType("DEBIT_CARD")}
      >
        <Bank size={16} color={theme.purple} />
        Cartão de débito
      </PaymentButton>
      <PaymentButton
        type="button"
        disabled={isCash}
        variant={isCash ? activeVariant : defaultVariant}
        onClick={() => setSelectedPaymentType("CASH")}
      >
        <Money size={16} color={theme.purple} />
        Dinheiro
      </PaymentButton>
    </PaymentContainer>
  );
}
