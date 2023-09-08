import React, { useEffect } from "react";
import "../Login/Login.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import{ useFormAndValidation } from '../../hooks/useForAndValidation';

const Login= (props) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation();
  // const [formValue, setFormValue] = useState({
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  // useEffect(()=> {
  //   setValues({ email:'', password: ''})
  //   console.log(values.name)
  // }, [])

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(values.email, values.password);
    resetForm();
  };

  return (
    <section className="login">
      <form className="login__container" onSubmit={handleSubmit} noValidate>
      <Link to="/">
        <img src={logo} className="login__logo" alt="логотип"></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__field">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="E-mail"
            className="login__info"
            minLength="5"
            maxLength="30"
            required
          ></input>
        </label>
        <span className="login__error">{errors.email}</span>
        <label className="login__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="Пароль"
            className="login__info"
            minLength="6"
            maxLength="30"
            required
          ></input>
        </label>
        <span className="login__error">{errors.password}</span>
        <span className="login__error">{props.defaultError}</span>
        <button
              type="submit"
              className="login__submit"
              disabled={!isValid}
            >
              Войти
            </button>
           <div className="login__block">
           <p className="login__question">Еще не зарегистрированы? </p>
            <Link to="/signup" className="login__router">
               Регистрация
            </Link>
            </div> 
      </form>
    </section>
  );
};

export default Login;