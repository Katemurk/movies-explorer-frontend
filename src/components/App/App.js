import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App/App.css";

import Main from "../Main/Main.js";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import NotFoundErr from "../NotFoundErr/NotFoundErr";
import Profile from "../Profile/Profile";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={!loggedIn} />
              <Main />
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Movies />
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile></Profile>
            </>
          }
        />
        <Route
          path="/404"
          element={
            <>
              <NotFoundErr></NotFoundErr>
            </>
          }
        />
        <Route path="/signup" element={<Register></Register>} />
        <Route path="/signin" element={<Login></Login>} />
      </Routes>
    </div>
  );
};

export default App;
