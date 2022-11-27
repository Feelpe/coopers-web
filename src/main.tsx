import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";

import { theme } from "./styles/theme";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
