import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { api } from "../../services/api";
import "../../styles/login.css";
export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await api.buildApiPostRequest(api.loginUrl(), payload);
    const bodyResult = await response.json();
    console.log(bodyResult);
  };
  return (
    <div className="login">
      <img className="login__img" src={logo} alt="logo" />

      <form className="login__content" onSubmit={handleSubmit}>
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
