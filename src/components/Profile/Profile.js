import React, { useState } from 'react'
import '../Profile/Profile.css'
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const [isEdit, setEdit] = useState(false);

    return (
     <section className='profile'>
 <form className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <label className="profile__field">
          Имя
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            className="profile__info"
            minLength="2"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <div className='profile__borders'></div>
        <span className="profile__error"></span>
        <label className="profile__field">
          E-&nbsp;mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            className="profile__info"
            minLength="5"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="profile__error"></span>

           <div className={isEdit ? "profile__block-save" : "profile__block"}>
           <button
              type="submit"
              className="profile__submit" 
              onClick={() => setEdit(!isEdit)}
            >
              {isEdit ? "Сохранить" : "Редактировать"}
            </button>
            <Link to="/signin" className="profile__router">
            {isEdit ? " " : "Выйти из аккаунта"}
            </Link>
            </div> 
      </form>
        </section>
    )
};

export default Profile;