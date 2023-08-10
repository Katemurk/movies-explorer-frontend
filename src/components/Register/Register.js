import React from "react";
import "../Register/Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {

  return (
    <section className="register">
      <form className="register__container">
        <Link to="/">
        <img src={logo} className="register__logo" alt="логотип"></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__field">
          Имя
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            className="register__info"
            minLength="2"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error"></span>
        <label className="register__field">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            className="register__info"
            minLength="5"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error"></span>
        <label className="register__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="register__info"
            minLength="6"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error"></span>
        <span className="register__error">Что-то пошло не так...</span>
        <button
              type="submit"
              className="register__submit"
            >
              Зарегистрироваться
            </button>
           <div className="register__block">
           <p className="register__question">Уже зарегистрированы? </p>
            <Link to="/signin" className="register__router">
               Войти
            </Link>
            </div> 
      </form>
    </section>
  );
};

export default Register;
