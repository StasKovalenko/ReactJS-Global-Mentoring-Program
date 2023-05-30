import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../MovieDetails';

const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('movie', data)
        return setMovie(data)});
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default MovieDetailsWrapper;
