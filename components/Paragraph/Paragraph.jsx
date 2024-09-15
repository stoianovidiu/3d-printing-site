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
      style={{ whiteSpace: "pre-line", textAlign: "justify" }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: props.children }}
        style={{ ul: { listStyleType: "disc", paddingLeft: "16px" } }}
      />
    </Typography>
  );
};

export default Paragraph;
