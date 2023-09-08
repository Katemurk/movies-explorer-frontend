import React from "react";
import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox(props) {
  const handleChange = (e) => {
    props.handleShorts(e.target.checked);
  }
  return (
    <section className="filterCheckbox">
      <div className="filterCheckbox__container">
        <input
          type="checkbox"
          className="filterCheckbox__input"
          checked={props.shorts}
          onChange={handleChange}
          id="switch"
        ></input>
        <label className="filterCheckbox__label" 
        for="switch"
        ></label>
        <p className="filterCheckbox__subtitle">Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;
