import React from "react";
import { render, screen } from '@testing-library/react';
import MovieTile from "../../modules/MovieTile/MovieTile";

describe('MovieTile', () => {
  const movie = {
    poster_path: 'https://image.tmdb.org/t/p/w500/moviePoster.jpg',
    title: 'Lord',
    release_date: '1994',
    genres: ['Crime']
  };
  
  it('renders the movie title', () => {
    render(<MovieTile movie={movie} />);
    const titleElement = screen.getByText(movie.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('calls handleOnClick when clicked', () => {
    const handleOnClick = jest.fn();
    render(<MovieTile movie={movie} handleOnClick={handleOnClick} />);
    const movieTile = screen.getByRole('listitem');
    movieTile.click();
    expect(handleOnClick).toHaveBeenCalledWith(movie);
  });
});
