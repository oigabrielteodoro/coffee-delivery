import { useEffect, useState } from "react";
import { CreditCard, Bank, Money } from "phosphor-react";
import { useTheme } from "styled-components";

import { PaymentButton, PaymentContainer } from "./Payment.styles";
import { useFormContext } from "react-hook-form";

export type PaymentType = "CREDIT_CARD" | "DEBIT_CARD" | "CASH";

export function Payment() {
  const theme = useTheme();

  const { watch, setValue, register } = useFormContext();

  useEffect(() => {
    register("paymentType");
  }, []);

  const selectedPaymentType = watch("paymentType") as PaymentType | null;

  const isCash = selectedPaymentType === "CASH";
  const isDebitCard = selectedPaymentType === "DEBIT_CARD";
  const isCreditCard = selectedPaymentType === "CREDIT_CARD";

  const defaultVariant = "base";
  const activeVariant = "purple-light-bordered";

  function handleSelectPaymentType(paymentType: PaymentType) {
    setValue("paymentType", paymentType);
  }

  return (
    <PaymentContainer>
      <PaymentButton
        type="button"
        disabled={isCreditCard}
        variant={isCreditCard ? activeVariant : defaultVariant}
        onClick={() => handleSelectPaymentType("CREDIT_CARD")}
      >
        <CreditCard size={16} color={theme.purple} />
        Cartão de crédito
      </PaymentButton>
      <PaymentButton
        type="button"
        disabled={isDebitCard}
        variant={isDebitCard ? activeVariant : defaultVariant}
        onClick={() => handleSelectPaymentType("DEBIT_CARD")}
      >
        <Bank size={16} color={theme.purple} />
        Cartão de débito
      </PaymentButton>
      <PaymentButton
        type="button"
        disabled={isCash}
        variant={isCash ? activeVariant : defaultVariant}
        onClick={() => handleSelectPaymentType("CASH")}
      >
        <Money size={16} color={theme.purple} />
        Dinheiro
      </PaymentButton>
    </PaymentContainer>
  );
}
