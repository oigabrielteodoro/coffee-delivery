import styled, { css } from "styled-components";

const buttonVariants = {
  "purple-light": css`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme.purple};

    &:not(:disabled) &:hover {
      background-color: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
  `,
  "purple-light-bordered": css`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["base-text"]};
    border: 0.1rem solid ${({ theme }) => theme.purple};
  `,
  "purple-dark": css`
    background-color: ${({ theme }) => theme["purple-dark"]};
    color: ${({ theme }) => theme.white};

    &:not(:disabled) &:hover {
      background-color: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
  `,
  "yellow-light": css`
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};

    &:not(:disabled) &:hover {
      background-color: ${({ theme }) => theme.yellow};
      color: ${({ theme }) => theme.white};
    }
  `,
  yellow: css`
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};

    &:not(:disabled) &:hover {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }
  `,
  base: css`
    background-color: ${({ theme }) => theme["base-button"]};
    color: ${({ theme }) => theme["base-text"]};

    &:not(:disabled) &:hover {
      background-color: ${({ theme }) => theme["base-hover"]};
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  `,
};

type ButtonProps = {
  variant: keyof typeof buttonVariants;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  padding: 0.8rem;
  column-gap: 0.4rem;

  border: 0.1rem solid transparent;
  border-radius: 0.6rem;

  font-size: 1.4rem;
  line-height: 130%;
  transition: all 0.3s;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  ${({ variant }) => buttonVariants[variant]}
`;
