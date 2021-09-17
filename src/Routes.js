import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Home} />
        <Route path="/news" exact component={News} />
      </Switch>
    </Switch>
  );
}
