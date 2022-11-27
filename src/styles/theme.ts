import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    alphas: {
      "700": "#A1A1A1",
      "500": "#999999",
    },
    green: {
      "500": "#46BD62",
      "400": "#4AC059",
      "300": "#4AC959",
    },
    orange: {
      "500": "#E88D39",
      "300": "#E38D3F"
    },
    blue: {
      "900": "#06152B"
    }
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  layerStyles: {
    underline: {
      textDecorationLine: "underline",
      color: "#4AC959"
    }
  }
});
