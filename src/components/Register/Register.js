import React, { useEffect } from "react";
import "../Register/Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useForAndValidation";
import { validateEmail } from "../../utils/utils";

const Register = (props) => {
  const { values, handleChange, errors, isValid, resetForm, setIsValid } =
    useFormAndValidation();

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistration(values.name, values.email, values.password);
    resetForm();
  };
  useEffect(() => {
    if (values < 1) {
      setIsValid(false);
    }
    console.log(values.name);
  }, [values, setIsValid]);

  return (
    <section className="register">
      <form className="register__container" onSubmit={handleSubmit} noValidate>
        <Link to="/">
          <img src={logo} className="register__logo" alt="логотип"></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__field">
          Имя
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            className="register__info"
            minLength="2"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error">{errors.name}</span>
        <label className="register__field">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="E-mail"
            className="register__info"
            minLength="5"
            maxLength="30"
            pattern={validateEmail}
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error">{errors.email}</span>
        <label className="register__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="Пароль"
            className="register__info"
            minLength="8"
            maxLength="30"
            required
            autoComplete="off"
          ></input>
        </label>
        <span className="register__error">{errors.password}</span>
        <span className="register__error">{props.defaultError}</span>
        <button type="submit" className="register__submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <div className="register__block">
          <p className="register__question">Уже зарегистрированы? </p>
          <Link to="/signin" className="register__router">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
