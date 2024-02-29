import * as React from "react";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import { ImageType } from "./MainCard";
import theme from "../../styles/theme";

const ImageCard = ({ image, imageType }) => {
  const cardHeight =
    imageType === ImageType.HomePage
      ? { sm: 320, md: 540, lg: 660, xl: 660 }
      : ImageType.LargeGrid
      ? { sm: 280, md: 320, lg: 440, xl: 440 }
      : { sm: 240, md: 200, lg: 240, xl: 320 };

  return (
    <Card
      variant="plain"
      sx={{
        height: cardHeight,
        borderRadius: theme.radius.xl2,
        boxShadow: theme.shadow.sm,
      }}
    >
      <CardCover>
        <Image
          alt={image.alt}
          src={image.src}
          fill
          sizes="100%"
          loading="lazy"
        />
      </CardCover>
    </Card>
  );
};

export default ImageCard;
