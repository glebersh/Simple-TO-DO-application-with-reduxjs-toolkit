import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#222222')(props),
        color: mode('black', 'white')(props),
      },
    })
  },
  colors: {
    "gray": {
      "50": "#F0F2F4",
      "100": "#D6DBE0",
      "200": "#BCC4CD",
      "300": "#A2ADB9",
      "400": "#8896A5",
      "500": "#6D7F92",
      "600": "#576675",
      "700": "#424C57",
      "800": "#2C333A",
      "900": "#16191D"
    },
    config: {
      initialColorMode: 'light',
      useSystemColorMode: true,
    }
  }
});

export default theme;