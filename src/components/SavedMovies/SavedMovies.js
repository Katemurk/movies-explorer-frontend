import React, { useState, useEffect } from "react";
import "../SavedMovies/SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [filterMovie, setFilterMovie] = useState(savedMovies);
  const [textErr, setTextErr] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchMovies, setSearchMovies] = useState("");
  const [shorts, setShorts] = useState(
    JSON.parse(localStorage.getItem("shorts")) || false
  );
  function handleSearch(data) {
    setSearchMovies(data);
  }

  function handleFilterShort() {
    setShorts(!shorts);
  }

  useEffect(() => {
    setTextErr(null);
    const filteredMoviesList = shorts
      ? filterMoviesDuration(filterSaveMovie(savedMovies, searchMovies))
      : filterSaveMovie(savedMovies, searchMovies);
    setFilterMovie(filteredMoviesList);
  }, [savedMovies, shorts, searchMovies]);

  const filterSaveMovie = (cards, saveMovie) => {
    return cards.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(saveMovie.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(saveMovie.toLowerCase())
      );
    });
  };

  const filterMoviesDuration = (cards) => {
    return cards.filter((card) => card.duration < 40);
  };

  return (
    <main className="savedMovies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        handleMovie={handleSearch}
        searchText={searchText}
      ></SearchForm>
      <FilterCheckbox
        handleShorts={handleFilterShort}
        shorts={shorts}
      ></FilterCheckbox>

      {!isLoading ? (
        <Preloader />
      ) : textErr ? (
        <p className="movies__saved-error">Произошла ошибка!! &#x1f63f;</p>
      ) 
      : filterMovie.length === 0 ? (
        <p className="movies__saved-error">Ничего не найдено! &#x1f63f;</p>
      ) 
      :(
        <MoviesCardList
          cards={filterMovie}
          isSavedMovies={true}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        ></MoviesCardList>
      )}

      <Footer></Footer>
    </main>
  );
}

export default SavedMovies;
