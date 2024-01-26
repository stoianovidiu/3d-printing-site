import { extendTheme } from "@mui/joy/styles";
import { THEME_COLORS } from "../constants/colors";
import "@fontsource/inter";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: THEME_COLORS.secondary,

          solidBg: THEME_COLORS.primary,
          solidColor: THEME_COLORS.secondary,
          solidHoverBg: THEME_COLORS.hoverPrimary,
          solidActiveBg: THEME_COLORS.secondary,
          solidActiveColor: THEME_COLORS.primary,

          softBg: THEME_COLORS.secondary,
          softColor: THEME_COLORS.primary,
          softHoverBg: THEME_COLORS.hoverSecondary,
          softActiveBg: THEME_COLORS.primary,
          softActiveColor: THEME_COLORS.secondary,

          outlinedBorder: THEME_COLORS.secondary,
          shadow: THEME_COLORS.shadowBlack,
        },
        text: {
          primary: THEME_COLORS.text,
          secondary: THEME_COLORS.secondary,
          tertiary: THEME_COLORS.primary,
        },
        divider: THEME_COLORS.secondary,
      },
    },
    dark: {
      palette: {
        primary: {
          500: THEME_COLORS.primary,

          solidBg: THEME_COLORS.secondary,
          solidColor: THEME_COLORS.primary,
          solidHoverBg: THEME_COLORS.hoverSecondary,
          solidActiveBg: THEME_COLORS.primary,
          solidActiveColor: THEME_COLORS.secondary,

          softBg: THEME_COLORS.primary,
          softColor: THEME_COLORS.secondary,
          softHoverBg: THEME_COLORS.hoverPrimary,
          softActiveBg: THEME_COLORS.primary,
          softActiveColor: THEME_COLORS.secondary,

          outlinedBorder: THEME_COLORS.primary,
          shadow: THEME_COLORS.shadowWhite,
        },
        text: {
          primary: THEME_COLORS.text,
          secondary: THEME_COLORS.primary,
          tertiary: THEME_COLORS.secondary,
        },
        divider: THEME_COLORS.primary,
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
  radius: {
    xs: 2,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    xl2: 24,
    xl3: 36,
    xl4: 40,
  },
  shadow: {
    sm: "0px 6px 10px rgba(255, 255, 255, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.5)",
  },
});

export default theme;
