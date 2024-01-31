import { Box, useColorScheme } from "@mui/joy";
import MenuItems from "../MenuItems/MenuItems";
import { SPACING } from "../../constants/spacings";
import projectTheme from "../../styles/theme";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Logo from "../Logo/Logo";
import { Divider } from "@mui/material";
import Footer from "../Footer/Footer";
import { getThemeMainColor, getThemeOppositeColor } from "../../utils/utils";

const templatePadding = SPACING;

const Template = (props) => {
  const { mode } = useColorScheme();
  const bgColor = getThemeMainColor(mode);
  const footerBgColor = getThemeOppositeColor(mode);

  return (
    <Box bgcolor={bgColor}>
      <Box
        px={{ sm: templatePadding.sm, md: templatePadding.md }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        margin="0 auto"
        minHeight="100vh"
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
              "--Divider-thickness": "2px",
              boxShadow: "0 0 0 100vmax var(--joy-palette-divider)",
              clipPath: "inset(0px -100vmax)",
            }}
          />
        </nav>
        <Box flex={1} py={{ sm: templatePadding.lg, md: templatePadding.xl }}>
          {props.children}
        </Box>
      </Box>
      <Footer bgcolor={footerBgColor} />
    </Box>
  );
};

export default Template;
