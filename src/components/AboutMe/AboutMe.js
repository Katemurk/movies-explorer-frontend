import React from "react";
import "../AboutMe/AboutMe.css";
import photo from "../../images/photo.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <h2 className="aboutMe__info-title">Студент</h2>
        <div className="aboutMe__info">
          <div className="aboutMe__info-text">
            <h3 className="aboutMe__info-name">Виталий</h3>
            <p className="aboutMe__info-subtitle">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="aboutMe__info-description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё
              увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.
            </p>
            <a
              href="https://github.com/Katemurk/"
              className="aboutMe__info-link"
            >
              Github
            </a>
          </div>
          <img className="aboutMe__info-photo" alt="фотография" src={photo}></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
