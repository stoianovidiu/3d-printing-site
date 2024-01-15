import { Menu } from "@mui/icons-material";
import {
  Box,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  ModalClose,
} from "@mui/joy";
import { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import Logo from "../Logo/Logo";

const DrawerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box display={{ lg: "none" }}>
      <IconButton
        onClick={toggleMenu}
        color="primary"
        variant="outlined"
        sx={{ borderColor: "primary" }}
      >
        <Menu />
      </IconButton>
      <Drawer
        sx={{ display: { lg: "none" } }}
        size="lg"
        open={isOpen}
        onClose={toggleMenu}
        {...props}
      >
        <ModalClose />
        <DialogTitle>
          <Logo />
        </DialogTitle>
        <Divider
          sx={{
            mb: 2,
            "--Divider-thickness": "2px",
          }}
        />
        <MenuItems />
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
