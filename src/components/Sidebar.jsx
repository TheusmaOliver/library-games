import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__img" src={logo} alt="logo" />
        <nav className="sidebar__nav">
          <ul className="sidebar__nav--list">
            <li className="sidebar__nav--list-item">My Account</li>
            <li className="sidebar__nav--list-item">All Games</li>
            <li className="sidebar__nav--list-item">My Library</li>
            <li className="sidebar__nav--list-item">+ Add Games</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
