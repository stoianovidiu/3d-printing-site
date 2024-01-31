import { Box, Divider, Grid, Typography, useColorScheme } from "@mui/joy";
import Header from "../Header/Header";
import Button from "../Button/Button";
import projectTheme from "../../styles/theme";
import Paragraph from "../Paragraph/Paragraph";
import {
  Facebook,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { getThemeMainColor } from "../../utils/utils";

const contactDetails = [
  {
    icon: <LocationOn />,
    text: "Str. Acad. David Prodan, nr. 12, Cluj-Napoca",
  },
  { icon: <Mail />, text: "office@office.com" },
  { icon: <Phone />, text: "0789 898 989" },
];

const socialMediaIcons = [<Facebook />, <LinkedIn />, <Twitter />];

const FooterHeader = (props) => {
  return (
    <Header level="h3" textColor={props.textColor}>
      {props.children}
    </Header>
  );
};

const Footer = (props) => {
  const { mode } = useColorScheme();
  const color = getThemeMainColor(mode);

  return (
    <Box {...props}>
      <Box
        p={{ sm: 2, md: 3 }}
        margin={{ md: "0 auto" }}
        maxWidth={projectTheme.breakpoints.values.xl}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Grid
          display="grid"
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr 1fr 1fr",
          }}
          justifyContent="space-between"
          gap={4}
          xs={4}
        >
          <Box display="flex" flexDirection="column" gap={{ sm: 2, md: 6 }}>
            <FooterHeader textColor={color}>
              Doriți să colaborăm în cadrul unui proiect?
            </FooterHeader>
            <Button sx={{ height: 48 }}>Contactați-ne</Button>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <FooterHeader textColor={color}>Linkuri utile</FooterHeader>
            <Box display="flex" flexDirection="column" gap={1}>
              {[1, 2, 3, 4].map((item) => (
                <Paragraph fontSize="sm">link</Paragraph>
              ))}
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <FooterHeader textColor={color}>Contact</FooterHeader>
            <Box display="flex" flexDirection="column" gap={2}>
              {contactDetails.map((detail) => (
                <Box
                  key={detail.text.split(".").join("-")}
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                >
                  {detail.icon}
                  <Paragraph fontSize={"sm"}>{detail.text}</Paragraph>
                </Box>
              ))}
            </Box>
            <Box display="flex" gap={1}>
              {socialMediaIcons.map((icon) => icon)}
            </Box>
          </Box>
        </Grid>
        <Divider
          sx={{
            "--Divider-lineColor": color,
          }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="sm" textColor="primary.900">
            TOATE DREPTURILE REZERVATE NUME
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
