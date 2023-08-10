import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../Header/Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ loggedIn }) {
  const location = useLocation();
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <>
      {loggedIn ? (
        <header className="header header-main">
          <div className="header__info">
            <Link to="/">
              <img src={logo} className="header__logo" alt="логотип"></img>
            </Link>
            <div className="header__nav">
              <div
                className="header__burger-btn"
                onClick={() => setMenuActive(!isMenuActive)}
              >
                <span className="header__burger-btn-span"></span>
              </div>
            </div>
            <nav className="header-main-buttons-container">
              <Link
                to="/movies"
                className={`${
                  location.pathname === "/movies"
                    ? "header-main-button header-main-button_active"
                    : "header-main-button"
                }`}
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className={`${
                  location.pathname === "/saved-movies"
                    ? "header-main-button header-main-button_active"
                    : "header-main-button"
                }`}
              >
                {" "}
                Сохраненные фильмы
              </Link>
              <Link
                to="/profile"
                className="header-main-button header-main-button-account"
              >
                Аккаунт
                <div className="header-main-button-accountImg"></div>
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header__info">
            <Link to="/">
              <img src={logo} className="header__logo" alt="логотип"></img>
            </Link>
            <div className="header__buttons-container">
              <Link to="/signup" className="header__button">
                Регистрация
              </Link>
              <Link
                to="/signin"
                className="header__button header__button-login"
              >
                Войти
              </Link>
            </div>
          </div>
        </header>
      )}
      <BurgerMenu active={isMenuActive} setActive={setMenuActive}></BurgerMenu>
    </>
  );
}

export default Header;
