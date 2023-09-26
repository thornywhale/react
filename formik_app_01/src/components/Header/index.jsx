import React, { useContext, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useClicker } from "../../hooks";
import styles from "./Header.module.scss";
import SwitchTheme from "./../SwitchTheme";
import { ThemeContext, MenuContext } from "../../contexts";
import { THEMES } from "../../constants";
import NavMenu from "../NavMenu";
import { STATUS_MENU } from "../../constants";
import headerReducer from "./headerReducer";
import NavSlider from "../NavSlider/index";

const styleMap = {
  [THEMES.LIGHT]: { backgroundColor: "transparent" },
  [THEMES.DARK]: { backgroundColor: "black" },
};

const Header = (props) => {
  const [theme] = useContext(ThemeContext);
  const { pathname } = useLocation();
  const [state, dispatch] = useReducer(headerReducer, { opened: false });
  const handleOpenMenu = (event) => {
    event.stopPropagation();
    return dispatch({ type: STATUS_MENU.OPEN });
  };
  const handleCloseMenu = () => {
    dispatch({ type: STATUS_MENU.CLOSE });
  };
  const handleEnterMenu = (event) => {
    if (event.key === "Enter") {
      return dispatch({ type: STATUS_MENU.OPEN });
    }
  };
  return (
    <div>
      <MenuContext.Provider value={{ state, handleCloseMenu, handleOpenMenu }}>
        <NavSlider />
        <div>
          <div style={styleMap[theme]} className={styles.headerDiv}>
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <MenuOpenIcon
                style={{ color: "white", outline: "none" }}
                fontSize="large"
                onClick={handleOpenMenu}
                onKeyDown={handleEnterMenu}
                tabIndex="0"
                aria-label="open menu"
              />
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
                justifyContent: "space-between",
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
      </MenuContext.Provider>
    </div>
  );
};

export default Header;
