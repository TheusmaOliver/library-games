import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../styles/login.css";
export default function Login() {
  return (
    <div className="login">
      <img className="login__img" src={logo} alt="logo" />
      <form className="login__content">
        <div className="login__content--box">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" name="email" />
        </div>
        <div className="login__content--box">
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" name="password" />
        </div>
        <div className="login__content--options">
          <input
            className="login__content--options-button"
            type="submit"
            value="Login"
          />
          <NavLink to="/register">Cadastre-se</NavLink>
        </div>
      </form>
    </div>
  );
}
