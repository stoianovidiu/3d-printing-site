import * as React from "react";
import { Box, Card, CardContent, CardOverflow } from "@mui/joy";
import Paragraph from "../Paragraph/Paragraph";
import Link from "../Link/Link";
import theme from "../../styles/theme";
import styles from "./MainCard.module.scss";

const OverflowCard = ({ title, date, image }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: { sm: 280, md: 400, lg: 456, xl: 576 },
        borderRadius: theme.radius.xl2,
      }}
    >
      <CardOverflow
        sx={{ padding: 0, maxHeight: { sm: 216, md: 320, lg: 360, xl: 480 } }}
      >
        <Box
          sx={{
            borderRadius: theme.radius.xl2,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt={image.alt}
            src={image.src}
            loading="lazy"
            className={styles.image}
          />
        </Box>
      </CardOverflow>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Link
          overlay
          variant="secondary"
          href="#"
          sx={{ padding: 0, justifyContent: "flex-start" }}
        >
          <Paragraph>{title}</Paragraph>
        </Link>
        <Paragraph fontSize="xs">{date}</Paragraph>
      </CardContent>
    </Card>
  );
};

export default OverflowCard;
