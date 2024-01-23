import { Grid } from "@mui/joy";
import Header from "../../components/Header/Header";
import MainCard, { CardType } from "../../components/Card/MainCard";
import projects from "../../public/utils/projects.json";
import theme from "../../styles/theme";
import { Divider } from "@mui/material";
import { SPACING } from "../../constants/spacings";

const templatePadding = SPACING;

const Portofoliu = () => {
  const itemsMixed = projects.map((item, index) => (
    <Grid sm={12} md={6} lg={6} xl={4} key={index}>
      <MainCard
        cardType={CardType.Mixed}
        title={item.title}
        date={item.date}
        image={item.coverImage}
      />
    </Grid>
  ));

  const itemsCover = projects.map((item, index) => (
    <Grid sm={12} md={6} lg={6} xl={4} key={index}>
      <MainCard cardType={CardType.Image} image={item.coverImage} />
    </Grid>
  ));

  return (
    <>
      <Header level="h1" sx={{ pb: { sm: 4, md: 6 } }}>
        Proiecte
      </Header>
      <Divider
        sx={{
          "--Divider-thickness": "2px",
          borderColor: theme.palette.primary.solidHoverBg,
        }}
      />
      <Grid
        container
        spacing={3}
        sx={{ flexGrow: 1 }}
        py={{ sm: templatePadding.xl, md: templatePadding.xxl }}
      >
        {itemsMixed}
        {itemsCover}
      </Grid>
    </>
  );
};

export default Portofoliu;
