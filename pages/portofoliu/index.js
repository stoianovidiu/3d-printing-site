import * as React from "react";
import {
  Box,
  Chip,
  Grid,
  Tab,
  Tabs,
  TabList,
  tabClasses,
  TabPanel,
} from "@mui/joy";
import Header from "../../components/Header/Header";
import MainCard, { CardType } from "../../components/Card/MainCard";
import projects from "../../public/utils/projects.json";
import theme from "../../styles/theme";
import { SPACING } from "../../constants/spacings";

const templatePadding = SPACING;

const applyGridLayout = (list) => {
  const gridLayout = list.map((project) => (
    <Grid sm={12} md={6} xl={4} key={project.id}>
      <MainCard
        cardType={CardType.Mixed}
        title={project.title}
        date={project.date}
        image={project.coverImage}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
      {gridLayout}
    </Grid>
  );
};

const Portofoliu = () => {
  const [index, setIndex] = React.useState(0);

  const residenceProjects = projects.filter((project) =>
    project.category.includes("residence")
  );

  const industrialProjects = projects.filter((project) =>
    project.category.includes("industrial")
  );

  const facadeProjects = projects.filter((project) =>
    project.category.includes("facade")
  );

  return (
    <>
      <Header level="h1">Proiecte</Header>

      <Box>
        <Tabs
          aria-label="Pipeline"
          value={index}
          onChange={(event, value) => setIndex(value)}
          sx={{ backgroundColor: "unset" }}
        >
          <TabList
            sx={{
              flexDirection: { sm: "column", lg: "row" },
              pt: { sm: templatePadding.lg, md: templatePadding.xl },
              boxShadow: `inset 0 -1px ${theme.palette.text.primary}`,
              [`&& .${tabClasses.root}`]: {
                flex: "initial",
                bgcolor: "transparent",
                "&:hover": {
                  bgcolor: "transparent",
                },
                [`&.${tabClasses.selected}`]: {
                  color: "primary.500",
                  "&::after": {
                    height: 2,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    bgcolor: "primary.500",
                  },
                },
              },
            }}
          >
            <Tab
              sx={{
                px: 1,
                mx: { sm: "auto", lg: 0 },
                color: theme.palette.text.primary,
                width: { sm: "fit-content" },
              }}
            >
              Toate
            </Tab>
            <Tab
              sx={{
                px: 1,
                mx: { sm: "auto", lg: 0 },
                color: theme.palette.text.primary,
                width: { sm: "fit-content" },
              }}
            >
              Locuinte individuale
            </Tab>
            <Tab
              sx={{
                px: 1,
                mx: { sm: "auto", lg: 0 },
                color: theme.palette.text.primary,
                width: { sm: "fit-content" },
              }}
            >
              Industriale
            </Tab>
            <Tab
              sx={{
                px: 1,
                mx: { sm: "auto", lg: 0 },
                color: theme.palette.text.primary,
                width: { sm: "fit-content" },
              }}
            >
              Fatade
            </Tab>
          </TabList>
          <Box sx={{ pt: { sm: templatePadding.xl, md: templatePadding.xxl } }}>
            <TabPanel value={0} sx={{ p: 0 }}>
              {applyGridLayout(projects)}
            </TabPanel>
            <TabPanel value={1} sx={{ p: 0 }}>
              {applyGridLayout(residenceProjects)}
            </TabPanel>
            <TabPanel value={2} sx={{ p: 0 }}>
              {applyGridLayout(industrialProjects)}
            </TabPanel>
            <TabPanel value={3} sx={{ p: 0 }}>
              {applyGridLayout(facadeProjects)}
            </TabPanel>
          </Box>
        </Tabs>
      </Box>
    </>
  );
};

export default Portofoliu;
