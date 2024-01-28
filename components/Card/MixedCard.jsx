import * as React from "react";
import { Card, CardContent } from "@mui/joy";
import ImageCard from "./ImageCard";
import Paragraph from "../Paragraph/Paragraph";
import Link from "../Link/Link";

const MixedCard = ({ title, date, image, href }) => {
  return (
    <Card
      variant="plain"
      sx={{
        bgcolor: "initial",
        p: 0,
        gap: 1,
      }}
    >
      <ImageCard image={image} />
      <CardContent sx={{ justifyContent: "flex-end", px: 2 }}>
        <Link
          overlay
          variant="secondary"
          href={href}
          sx={{ p: 0, justifyContent: "flex-start" }}
        >
          <Paragraph>{title}</Paragraph>
        </Link>
        <Paragraph fontSize="xs">{date}</Paragraph>
      </CardContent>
    </Card>
  );
};

export default MixedCard;
