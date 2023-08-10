import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="moviesCards">
      <ul className="moviesCards__list">
        <MoviesCard isSaved></MoviesCard>
        <MoviesCard isSaved></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard isSaved></MoviesCard>
        <MoviesCard isSaved></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard isHide></MoviesCard>
        <MoviesCard isHide></MoviesCard>
        <MoviesCard isSaved isHide></MoviesCard>
        <MoviesCard isHide></MoviesCard>
      </ul>
      <div className="moviesCards__btn-more">Ещё</div>
    </section>
  );
}

export default MoviesCardList;
