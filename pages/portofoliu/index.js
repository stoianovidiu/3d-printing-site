import { Typography } from "@mui/joy";
import MainCard, { CardType } from "../../components/Card/MainCard";
import projects from "../../public/utils/projects.json";

const Portofoliu = () => {
  return (
    <div>
      <Typography>Portofoliu</Typography>
      <MainCard
        cardType={CardType.Overflow}
        title={projects[0].title}
        date={projects[0].date}
        image={projects[0].coverImage}
      />
      <MainCard
        cardType={CardType.Overflow}
        title={projects[1].title}
        date={projects[1].date}
        image={projects[1].coverImage}
      />
      <MainCard cardType={CardType.Pricing} />
      <MainCard image={projects[0].coverImage} />
    </div>
  );
};

export default Portofoliu;
