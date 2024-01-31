import { THEME_COLORS } from "../constants/colors";

export const getThemeMainColor = (mode) =>
  mode === "light" ? THEME_COLORS.primary : THEME_COLORS.secondary;

export const getThemeOppositeColor = (mode) =>
  mode === "light" ? THEME_COLORS.secondary : THEME_COLORS.primary;
