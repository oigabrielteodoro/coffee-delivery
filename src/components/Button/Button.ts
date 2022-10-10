import styled, { css } from "styled-components";

const buttonVariants = {
  "purple-light": css`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme.purple};

    &:hover {
      background-color: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
  `,
  "purple-dark": css`
    background-color: ${({ theme }) => theme["purple-dark"]};
    color: ${({ theme }) => theme.white};

    &:hover {
      background-color: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
  `,
  "yellow-light": css`
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};

    &:hover {
      background-color: ${({ theme }) => theme.yellow};
      color: ${({ theme }) => theme.white};
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

  border: 0;
  border-radius: 0.6rem;

  font-size: 1.4rem;
  line-height: 130%;
  transition: all 0.3s;

  ${({ variant }) => buttonVariants[variant]}
`;
