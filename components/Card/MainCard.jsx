import * as React from "react";
import ImageCard from "./ImageCard";
import OverflowCard from "./OverflowCard";
import TextCard from "./TextCard";
import { Box } from "@mui/joy";
import MixedCard from "./MixedCard";

export const CardType = Object.freeze({
  Cover: Symbol("cover"),
  Overflow: Symbol("overflow"),
  Pricing: Symbol("pricing"),
  Mixed: Symbol("mixed"),
});

const MainCard = ({ cardType = CardType.Cover, title, date, image }) => {
  const [height, setHeight] = React.useState(200);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const changeLayout = () => {
      if (cardRef.current) {
        setHeight(cardRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", changeLayout);
    changeLayout();

    return () => {
      window.removeEventListener("resize", changeLayout);
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.03, 1.03, 1)" },
      }}
    >
      {cardType === CardType.Cover && (
        <ImageCard image={image} cardHeight={height} />
      )}
      {cardType === CardType.Overflow && (
        <OverflowCard title={title} date={date} image={image} />
      )}
      {cardType === CardType.Mixed && (
        <MixedCard
          title={title}
          date={date}
          image={image}
          cardHeight={height}
        />
      )}
      {cardType === CardType.Pricing && <TextCard />}
    </Box>
  );
};

export default MainCard;
