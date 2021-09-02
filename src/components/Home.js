import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import { getMovies } from "./URLs";
export default function SelectMovie() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies()
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
