import * as React from "react";
import { Box } from "@mui/joy";
import Header from "../Header/Header";
import theme from "../../styles/theme";

const Animation = () => {
  const introRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, []);

  return (
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
  );
};

export default Animation;
