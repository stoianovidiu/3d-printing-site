import * as React from "react";
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";
import { Card, CardContent, CardOverflow } from "@mui/joy";
import Paragraph from "../Paragraph/Paragraph";
import Link from "../Link/Link";
import theme from "../../styles/theme";

const OverflowCard = ({ title, date, image }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 280,
        borderRadius: theme.radius.xl2,
      }}
    >
      <CardOverflow>
        <AspectRatio
          ratio="16/9"
          sx={{
            borderRadius: `${theme.radius.xl2} ${theme.radius.xl2} 0 0`,
          }}
        >
          <Image alt={image.alt} src={image.src} layout="fill" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Link
          overlay
          variant="secondary"
          href="#"
          sx={{ padding: 0, justifyContent: "flex-start" }}
        >
          <Paragraph fontSize="lg">{title}</Paragraph>
        </Link>
        <Paragraph fontSize="sm">{date}</Paragraph>
      </CardContent>
    </Card>
  );
};

export default OverflowCard;
