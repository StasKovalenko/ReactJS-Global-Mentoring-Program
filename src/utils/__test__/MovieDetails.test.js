import React from "react";
import { render } from "@testing-library/react";
import MovieDetails from "../../modules/MovieDetails/MovieDetails";

describe("MovieDetails", () => {
  const movie = {
    title: "Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    vote_average: 9.3,
    genres: [{ id: 18, name: "Drama" }],
    release_date: "1994",
    runtime: 142,
    overview: "eventual redemption",
  };

  it("renders the movie details", () => {
    const { getByAltText, getByText } = render(<MovieDetails movie={movie} />);
    expect(getByAltText("movieDetailLogoImg")).toHaveAttribute("src", movie.poster_path);
    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByText(movie.vote_average)).toBeInTheDocument();
    expect(getByText("2h 22min")).toBeInTheDocument();
    expect(getByText(movie.overview)).toBeInTheDocument();
  });
});