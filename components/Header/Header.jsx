import { Typography, useColorScheme } from "@mui/joy";
import { THEME_COLORS } from "../../constants/colors";

const HEADER_SIZE = {
  h1: { sm: "xl3", md: "xl4" },
  h2: { sm: "xl2", md: "xl3" },
  h3: { sm: "md", md: "xl" },
};

const Header = (props) => {
  const { mode } = useColorScheme();
  const textColor =
    mode === "light" ? THEME_COLORS.secondary : THEME_COLORS.primary;

  return (
    <Typography
      level={props.level ? props.level : "h1"}
      fontSize={HEADER_SIZE[props.level]}
      textColor={props.textColor ? props.textColor : textColor}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default Header;
