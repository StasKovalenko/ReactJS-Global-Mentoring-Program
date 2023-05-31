import React from "react";
import MovieDetails from "../MovieDetails";

const MovieDetailsWrapper = ({ movieData }) => {
  return (
    <div>
      {movieData ? (
        <MovieDetails movie={movieData} />
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetailsWrapper;