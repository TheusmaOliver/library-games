import React from "react";
import { routesHeader } from "../utils/helpers";
import loupe from "../assets/images/loupe.png";
import profile from "../assets/images/profile.png";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          {routesHeader &&
            routesHeader.map((route) => (
              <NavLink key={route.name} to={route.path}>
                <li className="header__nav--list-item">{route.name}</li>
              </NavLink>
            ))}
        </ul>
      </nav>
      <div className="header__search">
        <img className="header__search--img" src={loupe} alt="lupa" />
        <input
          className="header__search--text"
          type="search"
          placeholder="Search games titles"
        />
      </div>
      <div className="header__profile">
        <img
          className="header__profile--img"
          src={profile}
          alt="foto do perfil"
        />
        <select className="header__profile--select" name="profile" id="profile">
          <option value="1">Nickname</option>
        </select>
      </div>
    </header>
  );
}
