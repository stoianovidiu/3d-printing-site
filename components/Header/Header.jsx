import { Typography, useColorScheme } from "@mui/joy";
import { getThemeOppositeColor } from "../../utils/utils";

const HEADER_SIZE = {
  h1: { sm: "xl3", md: "xl4" },
  h2: { sm: "xl2", md: "xl3" },
  h3: { sm: "md", md: "xl" },
};

const Header = (props) => {
  const { mode } = useColorScheme();
  const textColor = getThemeOppositeColor(mode);

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
