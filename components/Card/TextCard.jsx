import * as React from "react";
import { Card, List, ListItem } from "@mui/joy";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import theme from "../../styles/theme";

const TextCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: { sm: 280, md: 320, lg: 440, xl: 440 },
        borderRadius: theme.radius.xl2,
        boxShadow: "0px 6px 10px rgba(0,0,0,0.5)",
      }}
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
        01
      </Header>
      <List
        size="sm"
        sx={{
          mx: "calc(-1 * var(--ListItem-paddingX))",
          "--ListItem-paddingY": "4px",
        }}
      >
        <ListItem>
          <Paragraph
            fontSize="lg"
            textColor={theme.palette.text.secondary}
            sx={{ fontWeight: 700 }}
          >
            Scanare + Releveu 2D
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph fontSize="sm">pentru intabulari</Paragraph>
        </ListItem>
        <ListItem sx={{ mt: 2 }}>
          <Paragraph fontSize="sm">format</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph fontSize="lg" sx={{ fontWeight: 700 }}>
            .DWG
          </Paragraph>
        </ListItem>
      </List>
    </Card>
  );
};

export default TextCard;
