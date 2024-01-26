import * as React from "react";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import theme from "../../styles/theme";

const ImageCard = ({ image }) => {
  return (
    <Card
      variant="plain"
      sx={{
        height: { sm: 280, md: 320, lg: 440, xl: 440 },
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
