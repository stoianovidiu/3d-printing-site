import { Typography } from "@mui/joy";

const Paragraph = (props) => {
  return (
    <Typography
      textColor={props.textColor ? props.textColor : "text.primary"}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default Paragraph;
