import { Link } from "react-router-dom";

function Movie({ poster, id }) {
  return (
    <Link to={`sessions/${id}`}>
      <div className="movie">
        <img src={poster} />
      </div>
    </Link>
  );
}

export default function MovieList({ catalog }) {
  return (
    <div className="movie-list">
      {catalog.map((movie, index) => (
        <Movie poster={movie.posterURL} id={movie.id} key={index} />
      ))}
    </div>
  );
}
