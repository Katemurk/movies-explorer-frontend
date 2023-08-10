import React from "react";
import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filterCheckbox">
      <div className="filterCheckbox__container">
        <input
          type="checkbox"
          className="filterCheckbox__input"
          id="switch"
        ></input>
        <label class="filterCheckbox__label" for="switch"></label>
        <p className="filterCheckbox__subtitle">Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;
