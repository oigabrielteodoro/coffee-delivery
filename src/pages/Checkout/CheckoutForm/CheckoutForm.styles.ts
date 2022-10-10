import styled, { css } from "styled-components";

type GridContainerProps = {
  templateColumns: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  gap: 1.6rem;
`;

export const Field = styled.fieldset`
  position: relative;
  border: 0;
`;

export const OptionalPlaceholder = styled.span`
  position: absolute;
  color: ${({ theme }) => theme["base-label"]};

  font-size: 1.2rem;
  font-weight: 400;
  font-style: italic;

  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  font-size: 1.4rem;
  border-radius: 0.4rem;

  width: 100%;
  padding: 1.2rem;

  &.addressDetails {
    padding-right: 6.8rem;
  }

  ${({ theme }) => css`
    background: ${theme["base-input"]};
    border: 0.1rem solid ${theme["base-button"]};

    color: ${theme["base-text"]};

    &::placeholder {
      color: ${theme["base-label"]};
    }
  `}
`;
