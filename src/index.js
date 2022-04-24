import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Chakra
import { ChakraProvider } from "@chakra-ui/react";

// Base Web
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BaseProvider>
    </StyletronProvider>
  </ChakraProvider>
);
