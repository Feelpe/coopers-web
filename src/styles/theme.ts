import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    alphas: {
      "800": "#9A9A9A",
      "700": "#A1A1A1",
      "500": "#999999",
    },
    gray: {
      "900": "#06152B",
      "400": "#9499B3"
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
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  shadows: {
    md: '6px 6px 22px 8px rgba(66, 66, 66, 0.18)',
    lg: '0px 6px 22px 14px rgba(66, 66, 66, 0.18)'
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
