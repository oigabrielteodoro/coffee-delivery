import styled from "styled-components";

type GridContainerProps = {
  templateColumns: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  gap: 1.6rem;
`;
