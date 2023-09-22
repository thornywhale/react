import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, UserContext } from "./contexts";
import { useAuthUser, useTheme } from "./hooks";

import { THEMES } from "./constants";

import Header from "./components/Header";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";
import Page404 from "./pages/Page404";
import Chat from "./components/Chat";
import UsersLoader from './components/UsersLoader/index';

const App = (props) => {
  const { theme, changeTheme } = useTheme(THEMES.LIGHT);
  const { user, changeUser } = useAuthUser({
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    isSelect: false,
    avatar: "https://cdn-icons-png.flaticon.com/128/3641/3641963.png",
  });

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <UserContext.Provider value={[user, changeUser]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/users" element={<UsersLoader />} />
            <Route path="/loader/" element={<LoaderPage />}>
              <Route path="users" element={<UsersBlock />} />
              <Route path="events" element={<EventsBlock />} />
              <Route path="products" element={<ProductsBlock />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
