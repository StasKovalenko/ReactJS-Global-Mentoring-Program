import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "../../modules/MovieDetails/MovieDetails";

describe("MovieDetails", () => {

  render(<MovieDetails />)
  it("renders the movie details", () => {
    const logoEl = screen.getByTestId("movieDetailLogo")
    const titleEl = screen.getByTestId("movieDetailTitle")
    const voteEl = screen.getByTestId("movieDetailVote")
    const overviewEl = screen.getByTestId("movieDetailOverview")
    
    expect(logoEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(voteEl).toBeInTheDocument();
    expect(overviewEl).toBeInTheDocument();
  });
});