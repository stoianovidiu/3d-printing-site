import { Button as MButton } from "@mui/joy";

const Button = (props) => {
  return (
    <MButton
      sx={{
        width: { sm: "100%", md: 200 },
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
