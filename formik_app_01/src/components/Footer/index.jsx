import React from "react";
import cx from "classnames";
import { ThemeContext } from "../../contexts";
import { THEMES } from "./../../constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  const render = ([theme]) => {
    const classes = cx(styles.container, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
  };
  return <div>&copy;2023</div>;
  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default Footer;
