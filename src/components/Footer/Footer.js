import React from "react";
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">
<div className="footer__container">
  <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
<div className="footer__info">
  <p className="footer__info-year">&#169; 2023</p>
  <div className="footer__info-contacts">
<a href="https://practicum.yandex.ru/" className="footer__info-link">Яндекс.Практикум</a>
<a href="https://github.com/Katemurk" className="footer__info-link">Github</a>
  </div>
</div>
</div>
    </footer>
  );
}

export default Footer;