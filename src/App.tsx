import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Header from "./components/layout/Header/Header.component";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route path={"/sign-up"}>
          <SignUp />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
