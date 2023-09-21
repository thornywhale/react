import React, { useContext } from "react";
import { useClicker } from "../../hooks";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SwitchTheme from "./../SwitchTheme";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
import NavMenu from "../NavMenu";

const styleMap = {
  [THEMES.LIGHT]: { backgroundColor: "transparent" },
  [THEMES.DARK]: { backgroundColor: "black" },
};

const Header = () => {
  const [theme] = useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <div>
      <div style={styleMap[theme]} className={styles.headerDiv}>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">
            <img src="/logo.png" alt="squardhelp logo" />
          </Link>
          <div className={styles.clickerWrapper}>
            <p>clicks: {useClicker()}</p>
          </div>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {pathname === "/" || pathname === "/sign-up" ? (
            <Link to="/log-in">
              <button className={styles.headerBtn}>Log in</button>
            </Link>
          ) : (
            <Link to="/sign-up">
              <button className={styles.headerBtn}>Sign up</button>
            </Link>
          )}
          <SwitchTheme />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
