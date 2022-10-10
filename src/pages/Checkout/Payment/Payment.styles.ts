import { Button } from "src/components/Button";
import styled, { css } from "styled-components";

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`;

export const PaymentButton = styled(Button)`
  padding: 1.6rem;
  column-gap: 1.2rem;
`;
