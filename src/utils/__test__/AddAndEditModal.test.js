import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';

import AddAndEditModal from "../../modules/MovieForm/components/AddAndEditModal/AddAndEditModal";

const movie = {
  title: "Redemption",
  poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  vote_average: 9.3,
  genres: [{ id: 18, name: "Drama" }],
  release_date: "1994",
  runtime: 142,
  overview: "eventual redemption",
};

describe('Test AddAndEditModal component', () => {
  render(<AddAndEditModal movie={movie} modalMovieType={"add"}/>)

  it('test rendered elements', () => {
    const runTimeElem = screen.getByLabelText("runtime")
    const formElem = screen.getByTestId("form")
    const btnResetEl = screen.getByTestId("reset");
    const btnSubmitEl = screen.getByTestId("submit");

    expect(runTimeElem).toBeInTheDocument();
    expect(formElem).toBeInTheDocument();
    expect(btnResetEl).toBeInTheDocument();
    expect(btnSubmitEl).toBeInTheDocument();
  });
  it('typing into title field updates its value', () => {
    render(<AddAndEditModal modalMovieType="add" />);
    const titleInput = screen.getByLabelText('title');
    fireEvent.change(titleInput, { target: { value: 'Test movie title' } });
    expect(titleInput.value).toBe('Test movie title');
  });
});
