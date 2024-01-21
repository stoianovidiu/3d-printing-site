import * as React from "react";
import CoverCard from "./CoverCard";
import OverflowCard from "./OverflowCard";
import PricingCard from "./PricingCard";
import { Box } from "@mui/joy";

export const CardType = Object.freeze({
  Cover: Symbol("cover"),
  Overflow: Symbol("overflow"),
  Pricing: Symbol("pricing"),
});

const MainCard = ({ cardType = CardType.Cover, title, date, image }) => {
  const cardRef = React.useRef(null);
  return (
    <Box
      ref={cardRef}
      sx={{
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      }}
    >
      {cardType === CardType.Cover && <CoverCard image={image} />}
      {cardType === CardType.Overflow && (
        <OverflowCard title={title} date={date} image={image} />
      )}
      {cardType === CardType.Pricing && <PricingCard />}
    </Box>
  );
};

export default MainCard;
