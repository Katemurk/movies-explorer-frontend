import React from "react";
import "../Promo/Promo.css";
import promo from "../../images/promo.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#aboutProject" className="promo__link">
            <div className="promo__button">
              Узнать больше</div>
          </a>
        </div>
        <img
          src={promo}
          className="promo__img"
          alt="изображение WEB шара"
        ></img>
      </div>
    </section>
  );
}

export default Promo;
