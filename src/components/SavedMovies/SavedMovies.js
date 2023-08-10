import React from "react";
import "../SavedMovies/SavedMovies";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard></MoviesCard>
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
