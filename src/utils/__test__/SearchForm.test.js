import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';

import SearchForm from "../../modules/SearchForm/SearchForm";

describe('Search form', () => {
  let initialValue = 'I am an Initial Value from props';
  render(<SearchForm value={initialValue}/>);
  const submitBtnEl = screen.getByTestId("btn");
  const inputElement = screen.getByTestId("search_input");

  it('component renders an input with the value equal to initial value passed in props', () => {
    const inputElement = screen.getByTestId("search_input");
    expect(inputElement.value).toEqual(initialValue);
  });
  
  it('the "onChange" prop is called with proper value after typing and "click" on Submit', () => {
    fireEvent.input(inputElement, {
      target: {value:'The Lord of the Rings'}
    })
    fireEvent.click(submitBtnEl);
    expect(inputElement.value).toEqual('The Lord of the Rings');
  });
  
  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    fireEvent.change(inputElement, {
      target: {value:'Hobbit'}
    })
    fireEvent.keyPress(inputElement, {
      key: "Enter"
    })
    expect(inputElement.value).toEqual('Hobbit');
  });
  
});
