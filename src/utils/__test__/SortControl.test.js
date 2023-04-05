import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SortControl from "../../modules/SortControl/SortControl";

describe("SortControl", () => {
  it("'sort by' is rendered", () => {
    const { getByText } = render(<SortControl />);
    expect(getByText("sort by")).toBeInTheDocument();
  });

  it("render a button to dropdown", () => {
    const { getByRole } = render(<SortControl />);
    const button = getByRole("button", { name: "" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveClass("sortByFillBtnDown");
  });

  it("rendered a default sort by value of 'Release Date'", () => {
    const { getByText } = render(<SortControl />);
    const button = getByText("Release Date");
    expect(button).toHaveTextContent("Release Date");
  });

  it("dropdown is rendered with 'title' button", () => {
    const { getByText } = render(<SortControl />);
    const buttonRelease = getByText("Release Date");
    fireEvent.click(buttonRelease);
    expect(getByText("Title")).toBeInTheDocument();
  });
});
