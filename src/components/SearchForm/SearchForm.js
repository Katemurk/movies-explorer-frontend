import React, { useEffect, useState } from "react";
import "../SearchForm/SearchForm.css";
import { useFormAndValidation } from "../../hooks/useForAndValidation";

function SearchForm(props) {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation();
  const [textErr, setTextErr] = useState("");

  useEffect(() => {
    resetForm({ inputValue: props.searchText });
  }, [resetForm, props.searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.inputValue === "") {
      setTextErr("Нужно ввести ключевое слово!");
    } else {
      setTextErr("");
      props.setSearchPerformed(true);
      props.handleMovie(values.inputValue);
      
    }
  };
  return (
    <section className="searchForm">
      <form
        className="searchForm__container"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          required
          className="searchForm__input"
          name="inputValue"
          placeholder="Фильм"
          value={values.inputValue || ""}
          onChange={handleChange}
        ></input>
        <span className="searchForm__err">{textErr}</span>
        <button
          className="searchForm__button"
          type="submit"
          aria-label="Кнопка поиска"
        >
          Поиск
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
