import React, { useEffect, useState } from "react";
import "../SearchForm/SearchForm.css";
import { useFormAndValidation } from "../../hooks/useForAndValidation";

function SearchForm(props) {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm({ inputValue: props.searchText });
  }, [resetForm, props.searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleMovie(values.inputValue);
    console.log(values.inputValue);
  };
  return (
    <section className="searchForm">
      <form className="searchForm__container" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          className="searchForm__input"
          name="inputValue"
          placeholder="Фильм"
          value={values.inputValue || ""}
          onChange={handleChange}
        ></input>

        <button
          className="searchForm__button"
          type="submit"
          aria-label="Кнопка поиска"
          disabled={!isValid}
        >
          Поиск
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
