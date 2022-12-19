import React from 'react';
import { movies } from '../data';

const displayMovie = movies.map((movie) => {
  return (
    <div key={movie.time}>
      <h2>{movie.title}</h2>
      <p>Running time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
});

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovie}
    </div>
  );
}

export default Movies;
