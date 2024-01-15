import Link from "../Link/Link";
import { useRouter } from "next/router";

const MENU_ITEMS = [
  { label: "Scanarea 3D", path: "/scanarea-3d" },
  { label: "Servicii", path: "/servicii" },
  { label: "Portofoliu", path: "/portofoliu" },
  { label: "Contact", path: "/contact" },
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
          borderRadius={{ lg: 16 }}
          variant={item.path === router.route ? "soft" : "solid"}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
