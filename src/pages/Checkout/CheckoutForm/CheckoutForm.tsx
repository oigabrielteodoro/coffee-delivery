import { useFormContext } from "react-hook-form";
import VMasker from "vanilla-masker";
import {
  Field,
  GridContainer,
  Input,
  OptionalPlaceholder,
} from "./CheckoutForm.styles";

export function CheckoutForm() {
  const { register, watch } = useFormContext();

  const postalCodeValue = watch("postalCode", "");

  return (
    <GridContainer templateColumns="1fr">
      <GridContainer templateColumns="1fr 2fr">
        <Input
          placeholder="CEP"
          value={VMasker.toPattern(postalCodeValue, "99999-999")}
          {...register("postalCode")}
        />
      </GridContainer>
      <GridContainer templateColumns="1fr">
        <Input placeholder="Rua" {...register("street")} />
      </GridContainer>
      <GridContainer templateColumns="1fr 2fr">
        <Input type="number" placeholder="Número" {...register("number")} />
        <Field>
          <Input
            placeholder="Complemento"
            className="addressDetails"
            {...register("details")}
          />
          <OptionalPlaceholder>Opcional</OptionalPlaceholder>
        </Field>
      </GridContainer>
      <GridContainer templateColumns="1fr 2fr 6rem">
        <Input placeholder="Bairro" {...register("address")} />
        <Input placeholder="Cidade" {...register("city")} />
        <Input placeholder="UF" maxLength={2} {...register("state")} />
      </GridContainer>
    </GridContainer>
  );
}
