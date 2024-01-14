import { Box, useColorScheme } from "@mui/joy";
import Link from "../Link/Link";
import { MENU_ITEMS } from "../../constants/menuItems";
import { useRouter } from "next/router";
import { THEME_COLORS } from "../../constants/colors";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const NavMenu = () => {
  const router = useRouter();
  const { mode } = useColorScheme();

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
        <Box display="flex" alignItems="center" gap={4}>
          <Box>Logo</Box>
          <ThemeSwitcher />
        </Box>
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
