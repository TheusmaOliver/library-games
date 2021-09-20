import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import { api } from "../../services/api";
import "../../styles/login.css";
export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };
    await api
      .buildApiPostRequest(api.loginUrl(), payload)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("JWT", response.accessToken);
        toast.success("Login efetuado com sucesso!");
        props.history.push("/");
      })
      .catch(() => {
        toast.error("Deu erro no login");
      });
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
