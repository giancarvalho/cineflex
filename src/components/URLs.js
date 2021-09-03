import axios from "axios";
const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex`;

function getMovies() {
  return axios(`${URL}/movies`);
}

function getSessions(id) {
  return axios(`${URL}/movies/${id}/showtimes`);
}

function getSeats(id) {
  return axios(`${URL}/showtimes/${id}/seats`);
}

function sendReservationRequest(userInfo) {
  return axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`,
    userInfo
  );
}

export { getMovies, getSessions, getSeats, sendReservationRequest };
