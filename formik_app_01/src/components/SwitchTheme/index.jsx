import React, { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
import { DarkMode, LightMode } from "@mui/icons-material";
import styles from "./SwitchTheme.module.scss"

const SwitchTheme = (props) => {
  const [theme, changeTheme] = useContext(ThemeContext);
  return (
    <div onClick={changeTheme} className={styles.themeBtn}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
    </div>
  );
};

export default SwitchTheme;
