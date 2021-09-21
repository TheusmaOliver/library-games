import React from "react";
import { Route, Switch } from "react-router";
import GuardedRoute from "./components/GuardedRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Register from "./pages/Register/Register";

export default function Routes() {
  const isAuthenticated = Boolean(localStorage.getItem("JWT"));

  return (
    <Switch>
      <GuardedRoute
        path="/profiles"
        exact
        component={Profiles}
        auth={isAuthenticated}
      />
      <Route path="/login" exact component={Login} auth={isAuthenticated} />
      <Route path="/register" exact component={Register} />
      <Route path="/" component={Dashboard} auth={isAuthenticated} />
    </Switch>
  );
}
