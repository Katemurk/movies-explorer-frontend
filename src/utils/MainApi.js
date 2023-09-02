class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getError(res) {
    if (!res.ok) {
      return Promise.reject(`Произошла ошибка ${res.status}`);
    }
    return res.json();
  }

  getMoviesInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getError(res));
  }

  saveMovie(movie) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN

      }),
    }).then((res) => this._getError(res));
  }

  delLike(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getError(res));
  }


  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getError(res));
  }

  setUserInfo({ name, email }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._getError(res));
  }
}

export const api = new Api({
  baseUrl: "https://api.katemur.nomoredomains.xyz",
});
