import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  row-gap: 0.4rem;

  padding: 0.8rem;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 0.6rem;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["base-title"]};
    min-width: 2.4rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.purple};
  background: transparent;

  border: 0;
  border-radius: 0.2rem;

  box-shadow: 0;
  cursor: pointer;
`;
