import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, UserContext } from "./contexts";

import Header from "./components/Header";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { THEMES } from "./constants";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";
import Page404 from "./pages/Page404";
import NavMenu from "./components/NavMenu";

const App = () => {
  const [theme, setTheme] = useState();
  const [user, setUser] = useState();
  const [isSelect, setIsSelect] = useState();

  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const changeUser = () => {
    setUser(user);
    setIsSelect(!isSelect);
  };

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <UserContext.Provider value={[user, changeUser]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/loader/" element={<LoaderPage />}>
              <Route path="users" element={<UsersBlock />} />
              <Route path="events" element={<EventsBlock />} />
              <Route path="products" element={<ProductsBlock />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
