import * as React from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Header, { H2 } from "../components/Header/Header";
import Link from "../components/Link/Link";
import MainCard, { CardType, ImageType } from "../components/Card/MainCard";
import Paragraph from "../components/Paragraph/Paragraph";
import home from "../utils/home.json";
import projects from "../utils/projects.json";
import theme from "../styles/theme";
import { SPACING } from "../constants/spacings";
import { ROUTES } from "../constants/routes";

const itemPadding = SPACING;

const applyGridLayout = (list) => {
  const gridLayout = list.map((project) => (
    <Grid sm={12} md={6} xl={4} key={project.id}>
      <MainCard
        cardType={CardType.Mixed}
        title={project.title}
        date={project.date}
        image={project.coverImage}
        href={`${ROUTES.portfolio}/${project.id}`}
      />
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={3}
      sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl } }}
    >
      {gridLayout}
    </Grid>
  );
};

const Home = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const desktopProjects = projects.slice(0, 3);
  const mobileProjects = projects.slice(0, 4);

  const introRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const sameApp = Object.values(ROUTES).some((element) => {
    return Object.keys(router.components).includes(element);
  });

  React.useEffect(() => {
    if (!sameApp) {
      if (logoRef.current) {
        setTimeout(() => {
          logoRef.current.style.bottom = 0;
          logoRef.current.style.opacity = 1;
          logoRef.current.style.transition = "ease-in-out 0.5s";
        }, 400);

        setTimeout(() => {
          setTimeout(() => {
            logoRef.current.style.bottom = "150px";
            logoRef.current.style.opacity = 0;
            logoRef.current.style.transition = "ease-in-out 0.5s";
          }, 50);
        }, 1500);
      }

      if (introRef.current) {
        setTimeout(() => {
          introRef.current.style.top = "-100vh";
        }, 1800);
      }
    }
  }, []);

  return (
    <>
      {!sameApp && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 2,
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
            bgcolor: theme.palette.primary.softBg,
            transition: "1s",
          }}
          ref={introRef}
        >
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                bottom: "-20px",
                opacity: 0,
              }}
              ref={logoRef}
            >
              <Header
                level="h4"
                sx={{
                  letterSpacing: "0.05em",
                  color: theme.palette.text.tertiary,
                }}
              >
                Logo
              </Header>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        display="grid"
        gridTemplateColumns={"repeat(2, 1fr)"}
        gridTemplateRows={"1fr"}
      >
        <Box gridRow={1} gridColumn={"1/span2"}>
          <MainCard
            cardType={CardType.Image}
            cardAnimation={false}
            image={home.laserScanning.image}
            imageType={ImageType.HomePage}
          />
        </Box>
        <Box gridRow={1} gridColumn={"1/span2"} sx={{ zIndex: 1 }}>
          <Header
            level="h1"
            sx={{
              letterSpacing: "0.03em",
              "-webkit-text-stroke": "2px",
              textStroke: "2px",
              background: {
                sm: "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.30) 100%, rgba(255, 255, 255, 0.00) 100%);",
                md: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.30) 100%, rgba(255, 255, 255, 0.00) 100%);",
              },
              borderRadius: theme.radius.xl2,
              p: { sm: itemPadding.lg, md: itemPadding.xl2 },
            }}
          >
            Scanarea laser 3D
          </Header>
        </Box>
      </Box>

      <H2 title={"Ce este scanarea 3D"} />
      <Paragraph
        sx={{
          columnCount: { lg: itemPadding.sm },
          columnGap: { lg: itemPadding.md },
          pt: { sm: itemPadding.lg, md: itemPadding.xl },
        }}
      >
        {home.laserScanning.description}
      </Paragraph>
      <Link
        variant="soft"
        href={ROUTES.scanning}
        sx={{
          width: { sm: "100%", md: 260 },
          height: 48,
          mt: { sm: itemPadding.lg, md: itemPadding.xl },
          p: 0,
          borderRadius: itemPadding.xl,
        }}
      >
        Scanarea 3D
      </Link>

      <Grid container spacing={3}>
        <Grid sm={12} md={6}>
          <H2 title={"Servicii"} />
          <Paragraph sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl } }}>
            {home.services.description}
          </Paragraph>
        </Grid>
        <Grid sm={12} md={6}>
          <H2 title={"Pachete"} />
          <Paragraph sx={{ pt: { sm: itemPadding.lg, md: itemPadding.xl } }}>
            {home.pricing.description}
          </Paragraph>
        </Grid>
        <Grid sm={12} md={6}>
          <Link
            variant="soft"
            href={ROUTES.services}
            sx={{
              width: { sm: "100%", md: 260 },
              height: 48,
              mt: { sm: itemPadding.lg, md: itemPadding.xl },
              p: 0,
              borderRadius: itemPadding.xl,
            }}
          >
            Servicii
          </Link>
        </Grid>
      </Grid>

      <H2 title={"Proiecte"} />
      {applyGridLayout(matches ? desktopProjects : mobileProjects)}
      <Link
        variant="soft"
        href={ROUTES.portfolio}
        sx={{
          width: { sm: "100%", md: 260 },
          height: 48,
          mt: { sm: itemPadding.lg, md: itemPadding.xl },
          p: 0,
          borderRadius: itemPadding.xl,
        }}
      >
        Portofoliu
      </Link>
    </>
  );
};

export default Home;
