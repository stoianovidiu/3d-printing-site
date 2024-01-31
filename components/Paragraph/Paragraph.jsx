import { Typography, useColorScheme } from "@mui/joy";
import { getThemeOppositeColor } from "../../utils/utils";

const Paragraph = (props) => {
  const { mode } = useColorScheme();
  let customTextColor;

  if (props.hasThemeOppositeColor) {
    customTextColor = getThemeOppositeColor(mode);
  }

  if (props.textColor) {
    customTextColor = props.textColor;
  }

  return (
    <Typography
      textColor={customTextColor ? customTextColor : "text.primary"}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default Paragraph;
