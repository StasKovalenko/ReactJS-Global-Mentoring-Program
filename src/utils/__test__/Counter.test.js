import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../../modules/Counter/Counter";

describe('Counter', () => {
  let initialValue = 2;
  
  it('renders the component with the initial value passed as prop', () => {
    render(<Counter initialValue={initialValue} />);
    const counterValueEl = screen.getByText(initialValue);
    expect(+counterValueEl.innerHTML).toEqual(+initialValue);
  });

  it('a click event on "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue={initialValue} />);
    const counterValueEl = screen.getByText(initialValue);
    const decrementBtn = screen.getByText(/decrement/i);
    fireEvent.click(decrementBtn);
    expect(+counterValueEl.innerHTML).toBe(--initialValue);
  });

  it('a click event on "increment" button increments the displayed value', () => {
    render(<Counter initialValue={initialValue} />);
    const counterValueEl = screen.getByText(initialValue);
    const incrementBtn = screen.getByText(/increment/i);
    fireEvent.click(incrementBtn);
    expect(+counterValueEl.innerHTML).toBe(++initialValue);
  });
});


