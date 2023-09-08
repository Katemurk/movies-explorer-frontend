class movieApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _getError(res) {
      if (!res.ok) {
        return Promise.reject(`Произошла ошибка ${res.status}`);
      }
      return res.json();
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => this._getError(res));
    }
  
}
export const moviesApi = new movieApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  });
 