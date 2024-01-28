import * as React from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/joy";
import Header from "../../components/Header/Header";
import MainCard, { CardType, ImageType } from "../../components/Card/MainCard";
import projects from "../../utils/projects.json";
import { SPACING } from "../../constants/spacings";
import Paragraph from "../../components/Paragraph/Paragraph";

const itemPadding = SPACING;

const applyGridLayout = (list) => {
  const gridLayout = list.map((image) => (
    <Grid sm={12} md={4} lg={3} key={image.id}>
      <MainCard
        cardType={CardType.Image}
        image={image}
        imageType={ImageType.SmallGrid}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
      {gridLayout}
    </Grid>
  );
};

const Project = () => {
  const [projectDetails, setProjectDetails] = React.useState();
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      const projectID = router.query.project[0];
      const currentProject = projects.find((p) => p.id === projectID);
      setProjectDetails(currentProject);
    }
  }, [router.isReady]);

  return (
    projectDetails && (
      <>
        <Header level="h1">{projectDetails.title}</Header>
        <Paragraph
          fontSize="xs"
          sx={{ pt: { sm: itemPadding.xs, md: itemPadding.sm } }}
        >
          {projectDetails.date}
        </Paragraph>
        <Paragraph sx={{ py: { sm: itemPadding.lg, md: itemPadding.xl } }}>
          {projectDetails.description}
        </Paragraph>
        {applyGridLayout(projectDetails.gallery)}
      </>
    )
  );
};

export default Project;
