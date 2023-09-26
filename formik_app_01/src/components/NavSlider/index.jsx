import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import styles from "./NavSlider.module.scss";
import { MenuContext } from "../../contexts";

const NavSlider = () => {
  const {
    state: { opened },
    handleCloseMenu,
  } = useContext(MenuContext);

  const navClassNames = cx(styles.navmenu, {
    [styles.openedNavmenu]: opened,
  });

  const navRef = useRef(null);

  const handleEnterMenu = (event) => {
    if (event.key === "Enter") {
      handleCloseMenu();
    }
  };
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (opened && navRef.current.contains(target) === false) {
        handleCloseMenu();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    }; // eslint-disable-next-line
  }, [opened]);
  return (
    <nav className={navClassNames}>
      <CancelPresentationIcon
        fontSize="large"
        className={styles.closerIcon}
        onClick={handleCloseMenu}
        onKeyDown={handleEnterMenu}
        ref={navRef}
        tabIndex="0"
        aria-label="open menu"
      />
      <ul className={styles.sliderUl}>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSlider;
