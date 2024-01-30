import * as React from "react";
import { Grid } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header/Header";
import MainCard, { CardType } from "../../components/Card/MainCard";
import InfoBox from "../../components/InfoBox/InfoBox";
import services from "../../utils/services.json";
import theme from "../../styles/theme";
import { SPACING } from "../../constants/spacings";

const itemPadding = SPACING;

const applyGridLayout = (list, type) => {
  const gridLayout =
    list[0].description !== undefined
      ? list.map((item, index) => (
          <Grid sm={12} lg={6} key={item.id}>
            <InfoBox
              itemNumber={index + 1}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))
      : list.map((item, index) => (
          <Grid sm={12} md={6} xl={4} key={item.id}>
            <MainCard
              cardType={type}
              cardAnimation={false}
              image={item}
              itemNumber={index + 1}
              title={item.title}
              subtitle={item.subtitle}
              fileType={item.fileType}
            />
          </Grid>
        ));

  return (
    <Grid
      container
      spacing={list[0].description !== undefined ? { sm: 4, md: 6 } : 3}
      sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl2 } }}
    >
      {gridLayout}
    </Grid>
  );
};

const Services = () => {
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const desktopGallery = services.gallery;
  const mobileGallery = services.gallery.slice(0, 2);

  return (
    <>
      <Header level="h1">Servicii</Header>
      {applyGridLayout(services.options)}
      {applyGridLayout(
        matches ? desktopGallery : mobileGallery,
        CardType.Image
      )}
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
        Pachete
      </Header>
      {applyGridLayout(services.pricing, CardType.Text)}
    </>
  );
};

export default Services;
