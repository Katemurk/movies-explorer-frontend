import React from "react";
import '../SearchForm/SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchForm">
    <form className="searchForm__container">
        <input
          type="text"
          required
          className="searchForm__input"
          placeholder="Фильм"
          minLength="3"
          maxLength="100"
        >
        </input>
        <button className="searchForm__button" type="submit" aria-label="Кнопка поиска">Поиск</button>
    </form>
<FilterCheckbox></FilterCheckbox>
    </section>
  );
}

export default SearchForm;