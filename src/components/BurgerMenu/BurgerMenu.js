import React from "react";
import "../BurgerMenu/BurgerMenu.css";
import { Link, useLocation } from "react-router-dom";

const BurgerMenu = ({ active, setActive }) => {
    const location = useLocation();
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="menu__blur">
        <div className="menu__container" onClick={(e) => e.stopPropagation()}>
          <div
            className="menu__btn-close"
            onClick={() => setActive(false)}
          ></div>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to={"/"}>
                Главная
              </Link>
            </li>
            <li className="menu__item">
              <Link className={`${
                    location.pathname === "/movies"
                      ? "menu__link menu__link-active"
                      : "menu__link"
                  }`} to={"/movies"}>
                Фильмы
              </Link>
            </li>
            <li className="menu__item">
              <Link className={`${
                    location.pathname === "/saved-movies"
                      ? "menu__link menu__link-active"
                      : "menu__link"
                  }`} to={"/saved-movies"}>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <div className="menu__account">
            <Link to="/profile" className="menu__account-text">
              Аккаунт
              <div className="menu__account-img"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
