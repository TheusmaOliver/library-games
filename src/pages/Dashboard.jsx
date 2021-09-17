import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import Home from "./Home";
import MyAccount from "./MyAccount";
import MyLibrary from "./MyLibrary";
import News from "./News";
import Settings from "./Settings";

export default function Dashboard() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="pages">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={News} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/account" exact component={MyAccount} />
            <Route path="/library" exact component={MyLibrary} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
