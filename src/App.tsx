import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Header from "./layout/Header/Header.component";
import SignUp from "./pages/SignUp";
import Searched from "./pages/Searched";
import { useSelector } from "react-redux";
import { AppState } from "./types/AppState";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.style";
import "swiper/swiper.min.css";

function App() {
  const theme = useSelector((state: AppState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/search/:query"}>
          <Searched />
        </Route>

        <Route exact path={"/sign-up"}>
          <SignUp />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
