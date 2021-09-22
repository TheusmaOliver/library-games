import React, { useEffect } from "react";
import { routesHeader } from "../utils/helpers";
import loupe from "../assets/images/loupe.png";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import User from "../hooks/User";

export default function Header({ auth }) {
  const { user } = User();
  useEffect(() => {
    if (auth) {
      return user;
    }
  }, [auth, user]);
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
      <div>
        {auth ? (
          <>
            {user.profiles &&
              user.profiles.map((profile) => (
                <div className="header__profile" key={profile.id}>
                  <img
                    className="header__profile--img"
                    src={profile.imagemUrl}
                    alt="foto do perfil"
                  />
                  <select
                    className="header__profile--select"
                    name="profile"
                    id="profile"
                  >
                    <option value="1">{profile.title}</option>
                  </select>
                </div>
              ))}
          </>
        ) : (
          <NavLink to="/login">
            <button className="header__profile--login">login</button>
          </NavLink>
        )}
      </div>
    </header>
  );
}
