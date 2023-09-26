import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./LoaderPage.module.scss";

const LoaderPage = () => {
  return (
    <>
      <ul className={styles.loaderList}>
        <li>
          <NavLink to="/loader/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/loader/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/loader/products">Products</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LoaderPage;
