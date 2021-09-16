import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__img" src={logo} alt="logo" />
        <nav className="sidebar__navbar">
          <ul className="sidebar__navbar--list">
            <li className="sidebar__navbar--list-item">My Account</li>
            <li className="sidebar__navbar--list-item">All Games</li>
            <li className="sidebar__navbar--list-item">My Library</li>
            <li className="sidebar__navbar--list-item">+ Add Games</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
