import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts";

import Header from "./components/Header";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { THEMES } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
