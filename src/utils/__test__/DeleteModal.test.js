import React from "react";
import { render, screen } from "@testing-library/react";

import DeleteModal from "../../modules/MovieForm/components/DeleteModal/DeleteModal";


describe('Test DeleteModal component', () => {
  render(<DeleteModal />)

  it('check rendered elements', () => {
    const contentEl = screen.getByText(/are/i);
    const btnEl = screen.getByText("confirm");

    expect(btnEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });
});
