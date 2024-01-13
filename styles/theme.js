import { extendTheme } from "@mui/joy/styles";
import { THEME_COLORS } from "../constants/colors";
import "@fontsource/inter";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: THEME_COLORS.primary,
          solidColor: THEME_COLORS.secondary,
          solidHoverBg: THEME_COLORS.hoverPrimary,
          solidActiveBg: THEME_COLORS.secondary,
          solidActiveColor: THEME_COLORS.primary,
          solidBorder: THEME_COLORS.secondary,

          softBg: THEME_COLORS.secondary,
          softColor: THEME_COLORS.primary,
          softHoverBg: THEME_COLORS.hoverSecondary,
          softActiveBg: THEME_COLORS.primary,
          softActiveColor: THEME_COLORS.secondary,
          softBorder: THEME_COLORS.secondary,
        },
        background: {
          body: THEME_COLORS.primary,
        },
        text: {
          primary: THEME_COLORS.text,
          secondary: THEME_COLORS.secondary,
          tertiary: THEME_COLORS.primary,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidBg: THEME_COLORS.secondary,
          solidColor: THEME_COLORS.primary,
          solidHoverBg: THEME_COLORS.hoverPlaceholder,
          solidActiveBg: THEME_COLORS.primary,
          solidActiveColor: THEME_COLORS.secondary,

          softBg: THEME_COLORS.primary,
          softColor: THEME_COLORS.secondary,
          softHoverBg: THEME_COLORS.hoverPrimary,
          softActiveBg: THEME_COLORS.primary,
          softActiveColor: THEME_COLORS.secondary,
        },
        background: {
          body: THEME_COLORS.secondary,
        },
        text: {
          primary: THEME_COLORS.text,
          secondary: THEME_COLORS.primary,
          tertiary: THEME_COLORS.secondary,
        },
      },
    },
  },
  breakpoints: { values: { sm: 0, md: 640, lg: 1080, xl: 1440 } },
  fontSize: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xl2: 36,
    xl3: 40,
    xl4: 48,
  },
});

export default theme;
