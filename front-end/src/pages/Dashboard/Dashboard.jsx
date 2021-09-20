import React from "react";
import { Route, Switch } from "react-router-dom";
import GuardedRoute from "../../components/GuardedRoutes";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";
import AddGames from "./AddGames";
import GameInfo from "./GameInfo";
import Home from "./Home";
import MyAccount from "./MyAccount";
import MyLibrary from "./MyLibrary";
import News from "./News";
import Settings from "./Settings";

export default function Dashboard() {
  const isAuthenticated = Boolean(localStorage.getItem("JWT"));
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="pages">
          <Header auth={isAuthenticated} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={News} />
            <Route path="/info/:id" exact component={GameInfo} />
            <GuardedRoute
              path="/settings"
              exact
              component={Settings}
              auth={isAuthenticated}
            />
            <GuardedRoute
              path="/account"
              exact
              component={MyAccount}
              auth={isAuthenticated}
            />
            <GuardedRoute
              path="/library"
              exact
              component={MyLibrary}
              auth={isAuthenticated}
            />
            <GuardedRoute
              path="/add-games"
              exact
              component={AddGames}
              auth={isAuthenticated}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
