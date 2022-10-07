import { Outlet } from "react-router-dom";

import { Header } from "src/components/Header";

import { Container } from "./DefaultLayout.styled";

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}