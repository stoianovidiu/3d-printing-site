import { Box, useColorScheme } from "@mui/joy";
import NavMenu from "../NavMenu/NavMenu";
import { SPACING } from "../../constants/spacings";
import projectTheme from "../../styles/theme";
import { THEME_COLORS } from "../../constants/colors";

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
        height="100vh"
        maxWidth={projectTheme.breakpoints.values.xl}
        margin="0 auto"
      >
        <NavMenu />
        <Box flex={1} py={templatePadding.md}>
          {props.children}
        </Box>
        <Box>footer</Box>
      </Box>
    </Box>
  );
};

export default Template;
