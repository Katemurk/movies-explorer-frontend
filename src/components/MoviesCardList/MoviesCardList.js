import React, { useState, useEffect } from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  cards,
  onDeleteMovie,
  onSaveMovie,
  savedMovies,
  isSavedMovies,
}) {
  const location = useLocation();

  const getInitialCount = () => {
    const screenSize = window.innerWidth;
    if (screenSize >= 1280) {
      return 12;
    } else if (screenSize >= 768) {
      return 12;
    } else {
      return 5;
    }
  };

  const [countMovies, setCountMovies] = useState(getInitialCount());

  useEffect(() => {
    setCountMovies(getInitialCount());
  }, [window.innerWidth]);

  useEffect(() => {
    setCountMovies(getInitialCount());
  }, [cards]);

  useEffect(() => {
    const handleResize = () => {
      setCountMovies(getInitialCount());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMore = () => {
    const additionalCount = getCount();
    setCountMovies(countMovies + additionalCount);
  };

  const getCount = () => {
    const screenSize = window.innerWidth;
    if (screenSize >= 1280) {
      return 3;
    } else if (screenSize >= 768) {
      return 2;
    } else {
      return 2;
    }
  };

  const getSavedMovieCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  const renderMovieCards = (arr) => {
    return arr.map((card) => (
      <MoviesCard
        key={isSavedMovies ? card._id : card.id}
        saved={getSavedMovieCard(savedMovies, card)}
        cards={cards}
        card={card}
        isSavedMovies={isSavedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
      />
    ));
  };

  return (
    <section className="moviesCards">
      <ul className="moviesCards__list">
        {location.pathname === "/saved-movies"
          ? renderMovieCards(cards)
          : renderMovieCards(cards.slice(0, countMovies))}
      </ul>
      {location.pathname === "/movies" && countMovies < cards.length && (
        <div className="moviesCards__btn-more" onClick={handleShowMore}>
          Ещё
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
