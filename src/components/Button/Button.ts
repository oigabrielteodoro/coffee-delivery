import styled, { css } from "styled-components";

const buttonVariants = {
  "purple-light": css`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme.purple};
  `,
  "yellow-light": css`
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
  `,
};

type ButtonProps = {
  variant: keyof typeof buttonVariants;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.8rem;
  column-gap: 0.4rem;

  border: 0;
  border-radius: 0.6rem;

  font-size: 1.4rem;
  line-height: 130%;

  ${({ variant }) => buttonVariants[variant]}
`;
