import cn from "classnames";
import { Link } from "@mui/material";
import styles from "./TabLink.module.scss";

const TabLink = (props) => {
  return (
    <Link
      className={cn(styles.tab, {
        [styles.primary]: props.variant === "primary",
        [styles.secondary]: props.variant === "secondary",
      })}
      {...props}
    />
  );
};

export default TabLink;
