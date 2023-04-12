import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../../modules/Header/Header";

describe('Test Header component', () => {
  render(<Header />)
  it('header logo and button are rendered', () => {
    const btnElem = screen.getByRole("button");
    const logoElem = screen.getByTestId("header-logo");
    const headerContent = screen.getByTestId("headerContent")
    
    expect(btnElem).toBeInTheDocument()
    expect(logoElem).toBeInTheDocument()
    expect(headerContent).toBeInTheDocument()
  });  
});
