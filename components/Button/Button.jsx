import { Button as MButton } from "@mui/joy";

const Button = (props) => {
  return (
    <MButton
      sx={{
        maxWidth: { sm: "100%", md: 264 },
        ...props.sx,
      }}
      variant="solid"
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </MButton>
  );
};

export default Button;
