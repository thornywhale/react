import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";

const NavMenu = (props) => {
  return (
    <nav className={styles.navDiv}>
      <ul className={styles.navlist}>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
        <li>
          <NavLink to="/loader">loader</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
