import "normalize.css/normalize.css";

import { useEffect, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import projectTheme from "../styles/theme";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <CssVarsProvider theme={projectTheme}>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </CssVarsProvider>
  );
};

export default MyApp;
