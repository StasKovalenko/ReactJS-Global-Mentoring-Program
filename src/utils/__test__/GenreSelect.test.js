import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from "../../modules/GenreSelect/GenreSelect";
import { filter } from "../filter";

jest.mock('../filter');

describe('Genre Select', () => {
  const genres = ['All', '1', '2', '3'];
  const activeGenre = 3;
  it('Test that component renders all genres passed in props', () => {
    render(<GenreSelect genres={genres}/>);
    let genreElem;
    genres.forEach((genre) => {
      genreElem = screen.getByText(genre);
      expect(genreElem.innerHTML).toEqual(genre);
    })
  });

  it('Test that component highlights a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} activeGenre={activeGenre}/>)
    const btnElement = screen.getByText("3");
    expect(btnElement).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(btnElement.className).toEqual('genreListItem_Button active');
  });

  it('Test that after a click on a genre button, callback calls with correct argumets', () => {
    render(<GenreSelect genres={genres} />);
    const btnElement = screen.getByText('All');
    expect(btnElement).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(filter).toHaveBeenCalledTimes(1);
  });
});
