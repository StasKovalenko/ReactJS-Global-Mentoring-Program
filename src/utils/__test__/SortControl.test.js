import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortControl from "../../modules/SortControl/SortControl";

describe("SortControl", () => {
  it("'sort by' is rendered", () => {
    render(<SortControl />);
    expect(screen.getByText("sort by")).toBeInTheDocument();
  });

  it("test dropdown", () => {
    render(<SortControl />);
    const releaseBtnEl = screen.getByTestId("sortByBtn");
    const fillEl = screen.getByTestId("fill")
    expect(releaseBtnEl).toBeInTheDocument();
    expect(fillEl).toBeInTheDocument();
    fireEvent.click(releaseBtnEl);
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("release")).toBeInTheDocument();
    expect(fillEl).toHaveClass("sortByFillBtnUp");
  });
});
