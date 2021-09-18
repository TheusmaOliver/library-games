import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Switch>
  );
}
