import React from "react";
import { useHistory } from "react-router";
import loupe from "../assets/images/loupe.png";
import profile from "../assets/images/profile.png";
import "../styles/header.css";
export default function Header() {
  const router = useHistory();
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li
            className="header__nav--list-item"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className="header__nav--list-item"
            onClick={() => router.push("/news")}
          >
            News
          </li>
          <li
            className="header__nav--list-item"
            onClick={() => router.push("/settings")}
          >
            Settings
          </li>
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
