import "normalize.css/normalize.css";

import { CssVarsProvider } from "@mui/joy/styles";
import projectTheme from "../styles/theme";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CssVarsProvider theme={projectTheme} defaultMode="light">
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </CssVarsProvider>
  );
};

export default MyApp;
