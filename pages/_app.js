import { CssVarsProvider } from "@mui/joy/styles";
import projectTheme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CssVarsProvider theme={projectTheme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
};

export default MyApp;
