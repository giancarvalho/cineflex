import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import { getMovies } from "./APIRequests";
import Loading from "./Loading";
export default function SelectMovie() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovieList(...[response.data]);
      })
      .catch((error) => alert(error.response.status));
  }, []);

  if (movieList.length === 0) {
    return <Loading />;
  }

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
