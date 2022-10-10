import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./Router";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
      </OrderProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
