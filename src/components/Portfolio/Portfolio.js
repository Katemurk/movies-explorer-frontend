import React from "react";
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
        <div className="portfolio__container">
<h2 className="portfolio__title">Портфолио</h2>
<nav className="portfolio__links">
    <a href="https://github.com/Katemurk/how-to-learn" rel="noreferrer" target="_blank" className="portfolio__item">
        <p className="portfolio__description">Статичный сайт</p>
        <div className="portfolio__image"></div>
    </a>
    <a href="https://github.com/Katemurk/russian-travel" rel="noreferrer" target="_blank" className="portfolio__item">
        <p className="portfolio__description">Адаптивный сайт</p>
        <div className="portfolio__image"></div>
    </a>
    <a href="https://github.com/Katemurk/react-mesto-auth" rel="noreferrer" target="_blank" className="portfolio__item">
        <p className="portfolio__description">Одностраничное приложение</p>
        <div className="portfolio__image"></div>
    </a>
</nav>
</div>
    </section>
  );
}

export default Portfolio;