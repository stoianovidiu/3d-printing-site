import * as React from "react";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import theme from "../../styles/theme";

const CoverCard = ({ image }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 280,
        borderRadius: theme.radius.xl2,
      }}
    >
      <CardCover>
        <Image alt={image.alt} src={image.src} layout="fill" loading="lazy" />
      </CardCover>
    </Card>
  );
};

export default CoverCard;
