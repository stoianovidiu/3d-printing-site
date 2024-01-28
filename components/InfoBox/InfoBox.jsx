import * as React from "react";
import { Box, Stack } from "@mui/joy";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import theme from "../../styles/theme";
import { SPACING } from "../../constants/spacings";

const itemPadding = SPACING;

const InfoBox = ({ itemNumber, title, description }) => {
  return (
    <Box display="flex" flexDirection="column" gap={itemPadding.sm}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="flex-start"
        alignItems="baseline"
        spacing={{ sm: 0, md: itemPadding.md }}
      >
        <Header
          level="h3"
          sx={{
            fontSize: 64,
            "-webkit-text-stroke": "4px",
            textStroke: "4px",
            letterSpacing: "0.05em",
          }}
        >
          {`0${itemNumber}`}
        </Header>
        <Paragraph
          fontSize={{ sm: "md", md: "lg" }}
          textColor={theme.palette.text.secondary}
          sx={{ fontWeight: 700 }}
        >
          {title}
        </Paragraph>
      </Stack>
      <Paragraph fontSize={{ sm: "sm", md: "md" }}>{description}</Paragraph>
    </Box>
  );
};

export default InfoBox;
