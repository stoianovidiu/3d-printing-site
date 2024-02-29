import "normalize.css/normalize.css";

import { useEffect, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import projectTheme from "../styles/theme";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Animation from "../components/Animation/Animation";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [animation, setAnimation] = useState(<></>);

  useEffect(() => {
    setIsMounted(true);

    const wasVisited = sessionStorage.getItem("was_visited");
    if (!wasVisited) {
      sessionStorage.setItem("was_visited", 1);
      setAnimation(<Animation />);
    }
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <CssVarsProvider theme={projectTheme}>
      <PageTemplate>
        {animation}
        <Component {...pageProps} />
      </PageTemplate>
    </CssVarsProvider>
  );
};

export default MyApp;
