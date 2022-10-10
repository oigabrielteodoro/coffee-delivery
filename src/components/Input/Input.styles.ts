import styled, { css } from "styled-components";

export const Field = styled.fieldset`
  position: relative;
  border: 0;

  display: flex;
  flex-direction: column;
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

export const InputElement = styled.input`
  font-size: 1.4rem;
  border-radius: 0.4rem;

  width: 100%;
  padding: 1.2rem;

  transition: all 0.3s;

  &:not(:required) {
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

export const Error = styled.small`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.red};
`;
