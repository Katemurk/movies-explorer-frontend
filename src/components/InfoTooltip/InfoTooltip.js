import React, { useState, useEffect } from "react";
import imageSuccess from "../../images/success.svg";
import imageError from "../../images/error.svg";
import "../InfoTooltip/InfoTooltip.css"

const InfoTooltip = ({isSuccess, onClose}) => {

  return (

     
  
      <section className={`popup ${!isSuccess ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <img
            className="popup__image"
            src={isSuccess ? imageSuccess : imageError}
            alt="logo"
          />
          <h2 className="popup__heading">
            {isSuccess ? "Успешно!" : "Произошла ошибка!"}
          </h2>
          <button
            type="reset"
            aria-label="Кнопка закрытия"
            className="button-popup__toggle"
            onClick={onClose}
          ></button>
        </div>
      </section>
      
    )

    }


export default InfoTooltip;