import React, { useState, useEffect } from "react";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MovieApi";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Movies(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [textErr, setTextErr] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [shorts, setShorts] = useState(
    JSON.parse(localStorage.getItem("shorts")) || false
  );

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      setCards(JSON.parse(localStorage.getItem("movies")));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setTextErr(null);
      moviesApi
        .getMovies()
        .then((res) => {
          setCards(res);
          localStorage.setItem("movies", JSON.stringify(res));
        })
        .catch((err) => {
          setTextErr("Произошла ошибка! Попробуйте еще раз.");
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
   
    if (localStorage.getItem("searchText")) {
      setSearchText(localStorage.getItem("searchText"));
      setSearchPerformed(true);
    }
  }, []);

  useEffect(() => {
    const filterMovie = cards.filter((card) => {
      const filterNameMovie =
        card.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
        card.nameRU.toLowerCase().includes(searchText.toLowerCase());
      if (shorts) {
        return filterNameMovie && card.duration <= 40;
      } else {
        return filterNameMovie;
      }
    });
    setFilterMovie(filterMovie);
    if (searchPerformed) {
      localStorage.setItem("filterMovie", JSON.stringify(filterMovie));
    }
  }, [searchText, cards, shorts, searchPerformed]);

  const handleMovie = (value) => {
    setSearchText(value);
    setSearchPerformed(true);
    localStorage.setItem("searchText", value);
    console.log("movie");
  };
  const handleShorts = (isCheck) => {
    setShorts(isCheck);
    localStorage.setItem("shorts", JSON.stringify(isCheck));
    console.log("shorts");
  };

  return (
    <main className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        handleMovie={handleMovie}
        searchText={searchText}
      ></SearchForm>
      <FilterCheckbox
        handleShorts={handleShorts}
        shorts={shorts}
      ></FilterCheckbox>
      {isLoading && !textErr && <Preloader />}
      {!isLoading && textErr && <p className="movies__error">{textErr}</p>}
      {!isLoading &&
        !textErr &&
        searchPerformed &&
        filterMovie.length === 0 && (
          <p className="movies__error">Ничего не найдено! &#x1f63f;</p>
        )}
      {
        !isLoading &&
        !textErr && searchPerformed && filterMovie.length > 0 && (
          <MoviesCardList
            cards={filterMovie}
            onSaveMovie={props.onSaveMovie}
            onDeleteMovie={props.onDeleteMovie}
            savedMovies={props.savedMovies}
            isSavedMovies={false}
          ></MoviesCardList>
        )
      }

      <Footer></Footer>
    </main>
  );
}

export default Movies;
