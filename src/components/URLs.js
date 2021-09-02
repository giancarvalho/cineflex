import axios from "axios";
const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies`;

function getMovies() {
  return axios(URL);
}

function getSessions(id) {
  return axios(`${URL}/${id}/showtimes`);
}

export { getMovies, getSessions };
