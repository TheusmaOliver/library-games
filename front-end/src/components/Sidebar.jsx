import React from "react";
import { routesSidebar } from "../utils/helpers";
import logo from "../assets/images/logo.png";
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
import User from "../hooks/User";
export default function Sidebar() {
  const { user } = User();

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__img" src={logo} alt="logo" />
        <nav className="sidebar__nav">
          <ul className="sidebar__nav--list">
            {routesSidebar &&
              routesSidebar.map((route) => (
                <NavLink key={route.name} to={route.path}>
                  <li className="sidebar__nav--list-item">{route.name}</li>
                </NavLink>
              ))}
            {user.admin && (
              <NavLink to="/add-games">
                <li id="add" className="sidebar__nav--list-item">
                  + Add Games
                </li>
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
