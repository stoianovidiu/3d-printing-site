import { useColorScheme, Switch } from "@mui/joy";
import { DarkMode } from "@mui/icons-material";
import { THEME_COLORS } from "../../constants/colors";

const ThemeSwitcher = (props) => {
  const { mode, setMode } = useColorScheme();
  const reverseThemeColor =
    mode === "light" ? THEME_COLORS.secondary : THEME_COLORS.primary;

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={mode === "dark"}
      onChange={toggleMode}
      variant="soft"
      size="lg"
      slotProps={{
        thumb: {
          children: (
            <DarkMode
              sx={{
                color: reverseThemeColor,
                backgroundColor:
                  mode === "light"
                    ? THEME_COLORS.primary
                    : THEME_COLORS.secondary,
                borderRadius: 16,
              }}
            />
          ),
        },
      }}
      sx={{
        borderColor: reverseThemeColor,
        "--Switch-thumbSize": "20px",
        "--Switch-trackBackground": reverseThemeColor,
        "&:hover": {
          "--Switch-trackBackground":
            mode === "light"
              ? THEME_COLORS.hoverSecondary
              : THEME_COLORS.hoverPrimary,
        },
      }}
      {...props}
    />
  );
};

export default ThemeSwitcher;
