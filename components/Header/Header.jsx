import { Typography } from "@mui/joy";

const HEADER_SIZE = {
  h1: { sm: "xl3", md: "xl4" },
  h2: { sm: "xl2", md: "xl3" },
  h3: "xl",
};

const Header = (props) => {
  return (
    <Typography
      level={props.level ? props.level : "h1"}
      fontSize={HEADER_SIZE[props.level]}
      textColor={props.textColor ? props.textColor : "text.secondary"}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default Header;
