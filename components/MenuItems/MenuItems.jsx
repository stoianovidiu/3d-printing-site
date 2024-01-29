import Link from "../Link/Link";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";

const MENU_ITEMS = [
  { label: "Scanarea 3D", path: ROUTES.scanning },
  { label: "Servicii", path: ROUTES.services },
  { label: "Portofoliu", path: ROUTES.portfolio },
  { label: "Contact", path: ROUTES.contact },
];

const MenuItems = () => {
  const router = useRouter();

  return (
    <>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.label.toLocaleLowerCase().replace(" ", "-")}
          href={item.path}
          fontSize="lg"
          py={2}
          borderRadius={{ lg: 0 }}
          variant={item.path === router.route ? "soft" : "solid"}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
