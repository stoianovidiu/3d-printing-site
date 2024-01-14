import { Link as MLink } from "@mui/joy";

const Link = (props) => {
  return (
    <MLink
      href={props.href}
      justifyContent="center"
      variant={props.variant ? props.variant : "solid"}
      m={0}
      px={2}
      underline="none"
      {...props}
    >
      {props.children}
    </MLink>
  );
};

export default Link;
