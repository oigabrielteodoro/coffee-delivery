import styled from "styled-components";

import { Button as BaseButton } from "src/components/Button";

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme["base-button"]};

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;

    margin-right: 2rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.6rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  margin-top: 0.8rem;
`;

export const RemoveButton = styled(BaseButton)`
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 130%;
`;

export const ItemCostAmount = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 130%;
  white-space: nowrap;
  margin-left: 5rem;

  color: ${({ theme }) => theme["base-text"]};
`;
