import { useFormContext } from "react-hook-form";
import VMasker from "vanilla-masker";

import { Input } from "src/components/Input";

import { GridContainer } from "./CheckoutForm.styles";

export function CheckoutForm() {
  const { register, watch, formState } = useFormContext();

  const { errors } = formState;
  const postalCodeValue = watch("postalCode", "");

  return (
    <GridContainer templateColumns="1fr">
      <GridContainer templateColumns="1fr 2fr">
        <Input
          placeholder="CEP"
          value={VMasker.toPattern(postalCodeValue, "99999-999")}
          error={errors.postalCode?.message?.toString()}
          {...register("postalCode")}
        />
      </GridContainer>
      <GridContainer templateColumns="1fr">
        <Input
          placeholder="Rua"
          error={errors.street?.message?.toString()}
          {...register("street")}
        />
      </GridContainer>
      <GridContainer templateColumns="1fr 2fr">
        <Input
          type="number"
          placeholder="Número"
          error={errors.number?.message?.toString()}
          {...register("number", {
            valueAsNumber: true,
          })}
        />
        <Input
          placeholder="Complemento"
          required={false}
          error={errors.details?.message?.toString()}
          {...register("details")}
        />
      </GridContainer>
      <GridContainer templateColumns="2fr 2fr 1fr">
        <Input
          placeholder="Bairro"
          error={errors.address?.message?.toString()}
          {...register("address")}
        />
        <Input
          placeholder="Cidade"
          error={errors.city?.message?.toString()}
          {...register("city")}
        />
        <Input
          placeholder="UF"
          error={errors.state?.message?.toString()}
          maxLength={2}
          {...register("state")}
        />
      </GridContainer>
    </GridContainer>
  );
}
