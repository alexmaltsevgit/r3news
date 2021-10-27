import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Header from "./layout/Header/Header.component";
import SignUp from "./pages/SignUp";
import Searched from "./pages/Searched";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
