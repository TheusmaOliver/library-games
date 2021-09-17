import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/home.css";
import Games from "./Games";
import News from "./News";
import Settings from "./Settings";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="pages">
          <Header />
          <Switch>
            <Route path="/" exact component={Games} />
            <Route path="/news" exact component={News} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
