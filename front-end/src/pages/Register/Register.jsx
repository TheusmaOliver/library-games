import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { api } from "../../services/api";
import "../../styles/register.css";
export default function Register() {
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
    <div className="register">
      <img className="register__img" src={logo} alt="logo" />

      <form className="register__content" onSubmit={handleSubmit}>
        <div className="register__content--box">
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" name="name" />
        </div>

        <div className="register__content--box">
          <label htmlFor="surname">Surname</label>
          <input type="text" required id="surname" name="surname" />
        </div>

        <div className="register__content--box">
          <label htmlFor="imagemUrl">imagemUrl</label>
          <input type="url" required id="imagemUrl" name="imagemUrl" />
        </div>

        <div className="register__content--box">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" name="email" />
        </div>

        <div className="register__content--box">
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" name="password" />
        </div>

        <div className="register__content--box">
          <label htmlFor="cpf">Cpf</label>
          <input type="text" required id="cpf" name="cpf" />
        </div>

        <div className="register__content--options">
          <input
            className="register__content--options-button"
            type="submit"
            value="register"
          />

          <NavLink to="/login">Login</NavLink>
        </div>
      </form>
    </div>
  );
}
