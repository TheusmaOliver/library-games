import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Switch>
  );
}
