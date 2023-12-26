import { Button as MButton } from "@mui/material";
import styles from "./Button.module.scss";

const Button = () => {
  return (
    <MButton className={styles.test} variant="contained">
      {children}
    </MButton>
  );
};

export default Button;
