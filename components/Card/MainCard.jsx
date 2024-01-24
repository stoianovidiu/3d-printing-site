import * as React from "react";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import { Box } from "@mui/joy";
import MixedCard from "./MixedCard";

export const CardType = Object.freeze({
  Image: Symbol("cover"),
  Text: Symbol("pricing"),
  Mixed: Symbol("mixed"),
});

const MainCard = ({
  cardType = CardType.Image,
  title,
  date,
  image,
  subtitle,
  fileType,
}) => {
  return (
    <Box
      sx={{
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.03, 1.03, 1)" },
      }}
    >
      {cardType === CardType.Image && <ImageCard image={image} />}
      {cardType === CardType.Mixed && (
        <MixedCard title={title} date={date} image={image} />
      )}
      {cardType === CardType.Text && (
        <TextCard title={title} subtitle={subtitle} fileType={fileType} />
      )}
    </Box>
  );
};

export default MainCard;
