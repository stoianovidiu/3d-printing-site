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

export const ImageType = Object.freeze({
  HomePage: Symbol("homePage"),
  LargeGrid: Symbol("largeGrid"),
  SmallGrid: Symbol("smallGrid"),
});

const MainCard = ({
  cardType = CardType.Image,
  cardAnimation = true,
  title,
  date,
  image,
  subtitle,
  fileType,
  imageType = ImageType.LargeGrid,
  itemNumber,
  href,
}) => {
  return (
    <Box
      sx={
        cardAnimation
          ? {
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale3d(1.03, 1.03, 1)" },
            }
          : {}
      }
    >
      {cardType === CardType.Image && (
        <ImageCard image={image} imageType={imageType} />
      )}
      {cardType === CardType.Mixed && (
        <MixedCard
          title={title}
          date={date}
          image={image}
          imageType={ImageType.LargeGrid}
          href={href}
        />
      )}
      {cardType === CardType.Text && (
        <TextCard
          itemNumber={itemNumber}
          title={title}
          subtitle={subtitle}
          fileType={fileType}
        />
      )}
    </Box>
  );
};

export default MainCard;
