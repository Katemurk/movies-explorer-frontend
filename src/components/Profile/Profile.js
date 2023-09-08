import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { useFormAndValidation } from "../../hooks/useForAndValidation";

const Profile = ({ textErr, onUpdateUser, signOut }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, resetForm } =
    useFormAndValidation();
  const [isEdit, setIsEdit] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isSucsess, setIsSucsess] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    textErr ? setIsEdit(true) : setIsEdit(false);
  }, [textErr]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [values, setIsValid]);

  const handleEditProfile = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsEdit(false);
    setIsSucsess(true);
  };
  setTimeout(function () {
    setIsSucsess(false);
  }, 4500);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <form className="profile__container" onSubmit={handleEditProfile}>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <label className="profile__field">
            Имя
            <input
              id="name"
              type="text"
              name="name"
              placeholder={currentUser.name}
              className="profile__info"
              minLength="2"
              maxLength="30"
              required
              autoComplete="off"
              onChange={handleChange}
              value={values.name || ""}
              disabled={!isEdit}
            ></input>
          </label>
          <div className="profile__borders"></div>
          <span className="profile__error">{errors.name}</span>
          <label className="profile__field">
            E-&nbsp;mail
            <input
              id="email"
              type="email"
              name="email"
              placeholder={currentUser.email}
              className="profile__info"
              value={values.email || ""}
              required
              autoComplete="off"
              onChange={handleChange}
              disabled={!isEdit}
            ></input>
          </label>
          <span className="profile__error">{errors.email}</span>
          <span className="profile__lucky">
            {isSucsess ? "Изменение данных прошло успешно!" : ""}
          </span>
          <div className={isEdit ? "profile__block-save" : "profile__block"}>
            <button
              type={!isEdit ? "submit" : "button"}
              className="profile__submit"
              onClick={() => setIsEdit(!isEdit)}
              disabled={isEdit && !isValid}
            >
              {isEdit ? "Сохранить" : "Редактировать"}
            </button>
            <Link onClick={signOut} to="/" className="profile__router">
              {isEdit ? " " : "Выйти из аккаунта"}
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
