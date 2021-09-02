function Movie({ poster }) {
  return (
    <div className="movie">
      <img src={poster} />
    </div>
  );
}

export default function MovieList({ catalog }) {
  return (
    <div className="movie-list">
      {catalog.map((movie, index) => (
        <Movie poster={movie.posterURL} key={index} />
      ))}
    </div>
  );
}
