import { Box, useColorScheme } from "@mui/joy";
import Link from "../Link/Link";
import { MENU_ITEMS } from "../../constants/menuItems";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { THEME_COLORS } from "../../constants/colors";

const NavMenu = () => {
  const router = useRouter();
  const { mode, setMode } = useColorScheme();

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <Box
        display={{ sm: "none", md: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`2px solid ${
          mode === "light" ? THEME_COLORS.secondary : THEME_COLORS.primary
        }`}
      >
        <Box>Logo</Box>
        <Button onClick={toggleMode} variant="soft">
          {`current - ${mode}`}
        </Button>
        <Box display="flex">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label.toLocaleLowerCase().replace(" ", "-")}
              href={item.path}
              height="100%"
              fontSize="lg"
              py={2}
              variant={item.path === router.route ? "soft" : "solid"}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </nav>
  );
};

export default NavMenu;
