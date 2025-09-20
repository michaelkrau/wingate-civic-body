import { render, screen } from "@testing-library/react";
import { Button } from "./button";

test("renders a button with the correct text", () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
