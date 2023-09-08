import React from "react";
import "../MoviesCard/MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, saved, savedMovies, onDeleteMovie, onSaveMovie }) {
  const location = useLocation();

  const handleSaveClick = () => {
    if (saved) {
      onDeleteMovie(savedMovies.filter((c) => c.movieId === card.id)[0]);
    } else {
      onSaveMovie(card);
    }
  };

  const handleDeleteClick = () => {
    onDeleteMovie(card);
  };

  function minutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} ч. ${remainingMinutes} мин.`;
  }
  const cardLikeButtonClassName = `${
    saved ? "card__btn-save card__btn-save-active" : "card__btn-save"
  }`;
  const cardLikeButtonText = `${saved ? "" : "Сохранить"}`;

  return (
    <li className="card">
      <div className="card__text">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__time">{minutesToHours(card.duration)}</p>
      </div>
      <a href={card.trailerLink} target="blank" rel="noreferrer">
        <img src={
          location.pathname === "/saved-movies" ? card.image : `https://api.nomoreparties.co/${card.image.url}`
        } alt={card.nameRU} className="card__image"></img>
      </a>
      {location.pathname === "/saved-movies" ? (
        <button
          className="card__btn-save card__btn-save-saved"
          onClick={handleDeleteClick}
        ></button>
      ) : (
        <button className={cardLikeButtonClassName} onClick={handleSaveClick}>

          {cardLikeButtonText}
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
