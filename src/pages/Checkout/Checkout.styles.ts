import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin-top: 7.2rem;

  > form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3.2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Baloo 2", sans-serif;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const FinishYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;
