import * as React from "react";
import { Box, Grid } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header/Header";
import MainCard, { CardType } from "../../components/Card/MainCard";
import Paragraph from "../../components/Paragraph/Paragraph";
import scanning from "../../utils/scanning.json";
import theme from "../../styles/theme";
import { SPACING } from "../../constants/spacings";

const itemPadding = SPACING;

const applyGridLayout = (list, matches) => {
  const gridLayout = list.map((stage, index) => (
    <Box
      key={stage.id}
      display="grid"
      gridTemplateColumns={matches ? "repeat(2, 1fr)" : "1fr"}
      gridTemplateRows={matches ? "1fr" : "auto 1fr"}
      gap={3}
      sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl2 } }}
    >
      <Box gridRow={1} gridColumn={1}>
        <MainCard
          cardType={CardType.Image}
          cardAnimation={false}
          image={stage.image}
        />
      </Box>
      <Box
        gridRow={1}
        gridColumn={1}
        alignSelf={{ sm: "end", md: "start" }}
        sx={{ zIndex: 1 }}
      >
        <Header
          level="h3"
          sx={{
            fontSize: 64,
            letterSpacing: "0.05em",
            "-webkit-text-stroke": "4px",
            textStroke: "4px",
            background: {
              sm: "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.30) 100%, rgba(255, 255, 255, 0.00) 100%);",
              md: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.30) 100%, rgba(255, 255, 255, 0.00) 100%);",
            },
            borderRadius: theme.radius.xl2,
            textAlign: { sm: "left", md: "right" },
            px: itemPadding.md,
          }}
        >
          {index + 1}
        </Header>
      </Box>
      <Box gridRow={{ sm: 2, md: 1 }} gridColumn={{ sm: 1, md: 2 }}>
        <Paragraph>{stage.description}</Paragraph>
      </Box>
    </Box>
  ));

  return gridLayout;
};

const Scanning = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const fileFormats = scanning.equipment.details.options.map((item) => {
    return (
      <>
        <Paragraph
          key={`${item.id}-title`}
          sx={{ pt: { sm: itemPadding.md, md: itemPadding.lg } }}
        >
          {item.title}
        </Paragraph>
        <Paragraph key={`${item.id}-type`}>{item.fileType}</Paragraph>
      </>
    );
  });

  return (
    <>
      <Header level="h1">Scanarea laser 3D</Header>
      <Grid
        container
        spacing={3}
        sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl2 } }}
      >
        <Grid sm={12} md={6}>
          <MainCard
            cardType={CardType.Image}
            cardAnimation={false}
            image={scanning.laserScanning.image}
          />
        </Grid>
        <Grid sm={12} md={6}>
          <Paragraph>{scanning.laserScanning.description}</Paragraph>
        </Grid>
      </Grid>

      <Header
        level="h2"
        sx={{
          fontSize: {
            sm: "var(--joy-fontSize-xl3)",
            md: "var(--joy-fontSize-xl4)",
          },
          pt: { sm: itemPadding.xl2, md: itemPadding.xl3 },
        }}
      >
        Echipament
      </Header>
      <Grid
        container
        spacing={3}
        sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl2 } }}
      >
        <Grid sm={12} md={6}>
          <MainCard
            cardType={CardType.Image}
            cardAnimation={false}
            image={scanning.equipment.image}
          />
        </Grid>
        <Grid sm={12} md={6}>
          <Paragraph>{scanning.equipment.description}</Paragraph>
          {fileFormats}
        </Grid>
      </Grid>

      <Header
        level="h2"
        sx={{
          fontSize: {
            sm: "var(--joy-fontSize-xl3)",
            md: "var(--joy-fontSize-xl4)",
          },
          pt: { sm: itemPadding.xl2, md: itemPadding.xl3 },
        }}
      >
        Etape scanare 3D
      </Header>
      {applyGridLayout(scanning.scanningStages, matches)}
    </>
  );
};

export default Scanning;
