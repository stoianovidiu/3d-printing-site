import { Button as MButton } from "@mui/joy";

const Button = (props) => {
  return (
    <MButton
      sx={{
        backgroundColor: { sm: "red", md: "blue", lg: "yellow", xl: "green" },
        width: { sm: "100%", md: 200 },
      }}
      variant="solid"
    >
      {props.children}
    </MButton>
  );
};

export default Button;
