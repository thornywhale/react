import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SwitchTheme from "../SwitchTheme";
import { ThemeContext } from "../../contexts";
// import logo from "./../../images/logo.png";

const Header = (props) => {
  // const [theme] = useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <header>
      <Link to="/">
        <img src="/logo.png" alt="squardhelp logo" />
      </Link>
      {pathname === "/" || pathname === "/sign-up" ? (
        <Link to="/log-in">
          <button className={styles.headerBtn}>Log in</button>
        </Link>
      ) : (
        <Link to="/sign-up">
          <button className={styles.headerBtn}>Sign up</button>
        </Link>
      )}
      {/* <SwitchTheme /> */}
    </header>
  );
};

export default Header;
