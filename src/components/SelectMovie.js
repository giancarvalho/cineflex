import MovieList from "./MovieList";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SelectMovie() {
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies";
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios(URL)
      .then((response) => {
        setMovieList(...[response.data]);
      })
      .catch((error) => alert(error.response.status));
  }, []);

  return (
    <>
      <div className="title">
        {" "}
        <h1>Selecione o filme</h1>
      </div>
      <MovieList catalog={movieList} />
    </>
  );
}
