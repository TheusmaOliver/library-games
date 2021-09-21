import React, { useEffect, useState } from "react";
import { routesHeader } from "../utils/helpers";
import loupe from "../assets/images/loupe.png";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import { api } from "../services/api";

export default function Header({ auth }) {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    await api
      .buildApiGetRequest(api.readCurrentUser(), true)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => response.user)
      .then((response) => {
        setUser(response.profiles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (auth) {
      loadUser();
    }
  }, [auth]);
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
            {user &&
              user.map((profile) => (
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
