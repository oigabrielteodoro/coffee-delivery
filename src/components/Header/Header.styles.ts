import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  background: ${({ theme }) => theme.background};
  padding-block: 3.2rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    box-shadow: none;
    transition: all 0.3s;

    &:focus,
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1.2rem;
`;

export const TotalAmount = styled.span`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  background: ${({ theme }) => theme["yellow-dark"]};
  color: ${({ theme }) => theme.white};

  font-size: 1.2rem;
  font-weight: 700;

  text-align: center;
`;
