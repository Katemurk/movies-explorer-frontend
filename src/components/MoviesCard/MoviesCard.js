import React from "react";
import "../MoviesCard/MoviesCard.css";
import movie from "../../images/movie.jpg";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  return (
    <li className={props.isHide ? "card card-hide" : "card"}>
      <div className="card__text">
        <h2 className="card__title">В погоне за Бенкси</h2>
        <p className="card__time">27 минут</p>
      </div>
      <img src={movie} alt="картинка фильма" className="card__image"></img>
     {location.pathname === "/movies" ? (
      <button className={props.isSaved ? `card__btn-save card__btn-save-active` : "card__btn-save"}>{props.isSaved ? "" : "Сохранить"}</button>
     ) : (<button className="card__btn-save card__btn-save-saved"></button>)
     
     } 
    </li>
  );
}

export default MoviesCard;
