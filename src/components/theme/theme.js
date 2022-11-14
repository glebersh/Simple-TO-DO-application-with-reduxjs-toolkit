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
    "green": {
      "0": "FFFFFF00",
      "50": "#ECF8F2",
      "100": "#CAEDDA",
      "200": "#A8E1C2",
      "300": "#86D5AB",
      "400": "#64C993",
      "500": "#42BD7B",
      "600": "#359763",
      "700": "#27724A",
      "800": "#1A4C31",
      "900": "#0D2619"
    },
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