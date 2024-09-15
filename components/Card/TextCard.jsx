import * as React from "react";
import { Box, Card, List, ListItem } from "@mui/joy";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import theme from "../../styles/theme";
import { SPACING } from "../../constants/spacings";

const itemPadding = SPACING;

const TextCard = ({ itemNumber, title, subtitle, fileType }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: { sm: 520, md: 680, lg: 560, xl: 580 },
        borderRadius: theme.radius.xl2,
        boxShadow: theme.shadow.sm,
        justifyContent: "center",
        px: itemPadding.md,
      }}
    >
      <Box display="flex" flexDirection="column" gap={3}>
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
        <List
          size="sm"
          sx={{
            py: 0,
            mx: "calc(-1 * var(--ListItem-paddingX))",
            "--ListItem-paddingY": "4px",
          }}
        >
          <ListItem>
            <Paragraph
              fontSize="lg"
              hasThemeOppositeColor
              sx={{ fontWeight: 700 }}
            >
              {title}
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph fontSize="sm">
              {`<ul style="list-style-type: disc; padding-left: 16px">
                ${subtitle}
              </ul>`}
            </Paragraph>
          </ListItem>
          <ListItem sx={{ mt: itemPadding.sm }}>
            <Paragraph fontSize="sm">format</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph fontSize="lg" sx={{ fontWeight: 700 }}>
              {fileType}
            </Paragraph>
          </ListItem>
        </List>
      </Box>
    </Card>
  );
};

export default TextCard;
