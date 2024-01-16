import { Box, useColorScheme } from "@mui/joy";
import MenuItems from "../MenuItems/MenuItems";
import { SPACING } from "../../constants/spacings";
import projectTheme from "../../styles/theme";
import { THEME_COLORS } from "../../constants/colors";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Logo from "../Logo/Logo";
import { Divider } from "@mui/material";

const templatePadding = SPACING.PAGE_TEMPLATE_PADDING;

const Template = (props) => {
  const { mode } = useColorScheme();

  return (
    <Box
      bgcolor={mode === "light" ? THEME_COLORS.primary : THEME_COLORS.secondary}
    >
      <Box
        px={{ sm: templatePadding.sm, md: templatePadding.md }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        margin="0 auto"
        height="100vh"
        maxWidth={projectTheme.breakpoints.values.xl}
      >
        <nav>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={{ sm: 2, lg: 0 }}
          >
            <Box display="flex" alignItems="center" gap={4}>
              <Logo />
              <ThemeSwitcher />
            </Box>
            <DrawerMenu />
            <Box display={{ sm: "none", lg: "flex" }}>
              <MenuItems />
            </Box>
          </Box>
          <Divider
            sx={{
              // mb: 2,
              "--Divider-thickness": "2px",
              boxShadow: "0 0 0 100vmax var(--joy-palette-divider)",
              clipPath: "inset(0px -100vmax)",
            }}
          />
        </nav>
        <Box flex={1} py={templatePadding.md}>
          {props.children}
        </Box>
        <Box>footer</Box>
      </Box>
    </Box>
  );
};

export default Template;
