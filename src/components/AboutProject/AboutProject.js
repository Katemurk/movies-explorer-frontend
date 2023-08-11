import React from "react";
import "../AboutProject/AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject" id="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__content">
          <div className="aboutProject__info">
            <h3 className="aboutProject__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutProject__info-subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutProject__info">
            <h3 className="aboutProject__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__info-subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutProject__time">
          <h3 className="aboutProject__time-title">1 неделя</h3>
          <h3 className="aboutProject__time-title aboutProject__time-title-black">
            4 недели
          </h3>
          <p className="aboutProject__time-subtitle">Back-end</p>
          <p className="aboutProject__time-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
