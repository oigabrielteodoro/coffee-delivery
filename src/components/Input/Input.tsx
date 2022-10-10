/* eslint-disable n/handle-callback-err */
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import {
  Field,
  OptionalPlaceholder,
  InputElement,
  Error,
} from "./Input.styles";

type InputProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, required = true, ...props },
  ref
) => {
  return (
    <Field>
      <InputElement ref={ref} {...props} />
      {!required && <OptionalPlaceholder>Opcional</OptionalPlaceholder>}
      {error && <Error>{error}</Error>}
    </Field>
  );
};

export const Input = forwardRef(BaseInput);
