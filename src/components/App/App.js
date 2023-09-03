import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "../App/App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Main from "../Main/Main.js";
import { api } from "../../utils/MainApi";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import NotFoundErr from "../NotFoundErr/NotFoundErr";
import Profile from "../Profile/Profile";
import * as auth from "../../utils/Auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [isRegistred, setIsRegistred] = useState(false);
  const { pathname } = useLocation();
  const [defaultError, setDefaultError] = useState("");
  const [textErr, setTextErr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(pathname, { replace: true });
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          setIsLoading(true);
        });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(true);
        });
        api.getMoviesInfo()
        .then((list) => {
          setSavedMovies(list.reverse());
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(true);
        });
    }
  }, [loggedIn]);

  const handleRegistration = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        navigate("/signin", { replace: true });
        handleLogin(email, password);
        setIsRegistred(true);
      })
      .catch((err) => {
        if (err === "Ошибка 409") {
          return setDefaultError(
            "Пользователь с таким адресом уже зарегистрирован!"
          );
        } else if (err) {
          return setDefaultError("Ошибка при регистрации или ошибка сервера!");
        } else {
          setDefaultError("Что-то пошло не так!");
        }
        setTimeout(() => {
          setTextErr("");
        }, 10000);
      });
  };
  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          return setDefaultError("Введен неправильный логин или пароль!");
        } else if (err) {
          return setDefaultError("Ошибка при авторизации или ошибка сервера!");
        } else {
          setDefaultError("");
        }
        setTimeout(() => {
          setTextErr("");
        }, 10000);
      });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.clear();
  };

  const handleUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    api
      .setUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(true);
      });
  };

  const handleSaveMovie = (card) => {
    setIsLoading(true);
    // const isLiked = card.likes.some(id => id === currentUser._id);
    api
      .saveMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteCard = (card) => {
    api
      .delLike(card._id)
      .then(() => {
        setSavedMovies((c) => c.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                isLoading={isLoading}
                onSaveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                onDeleteMovie={deleteCard}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                onDeleteMovie={deleteCard}
                savedMovies={savedMovies}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onUpdateUser={handleUpdateUser}
                signOut={signOut}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <NotFoundErr></NotFoundErr>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegistration={handleRegistration}
                defaultError={defaultError}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login handleLogin={handleLogin} defaultError={defaultError} />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
