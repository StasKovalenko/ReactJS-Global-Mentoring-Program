import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dialog from "../../modules/Dialog/Dialog";

describe('Test dialog', () => {
  const title = "Test_title";
  const onClose = jest.fn();
  const text = "Test text"
  
  render(<Dialog title={title} onClose={onClose}>{text}</Dialog>)

  it('Test component render', () => {
    const titleElement = screen.getByText(title);
    const btnElem = screen.getByRole("button");
    const childElem = screen.getByText(text)

    expect(titleElement).toBeInTheDocument()
    expect(childElem).toBeInTheDocument()
    expect(btnElem.className).toEqual("dialogCloseBtn")

    fireEvent.click(btnElem)
    expect(onClose).toHaveBeenCalledTimes(1);
  });
})
