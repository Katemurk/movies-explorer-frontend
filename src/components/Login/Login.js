import React from "react";
import "../Login/Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Login= () => {
  return (
    <section className="login">
      <form className="login__container">
      <Link to="/">
        <img src={logo} className="login__logo" alt="логотип"></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__field">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            className="login__info"
            minLength="5"
            maxLength="30"
            required
          ></input>
        </label>
        <span className="login__error"></span>
        <label className="login__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="login__info"
            minLength="6"
            maxLength="30"
            required
          ></input>
        </label>
        <span className="login__error"></span>
      
        <button
              type="submit"
              className="login__submit"
            >
              Войти
            </button>
           <div className="login__block">
           <p className="login__question">Еще не зарегистрированы? </p>
            <Link to="/signup" className="login__router">
               Регистрация
            </Link>
            </div> 
      </form>
    </section>
  );
};

export default Login;