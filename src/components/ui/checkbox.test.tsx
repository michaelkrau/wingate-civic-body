import { render, screen } from "@testing-library/react";
import { Checkbox } from "./checkbox";

describe("Checkbox component", () => {
  test("renders a checkbox", () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });

  test("renders a disabled checkbox", () => {
    render(<Checkbox disabled />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeDisabled();
  });
});
