import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge component", () => {
  test("renders a default badge", () => {
    render(<Badge>Default</Badge>);
    const badgeElement = screen.getByText(/Default/i);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-primary");
  });

  test("renders a secondary badge", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badgeElement = screen.getByText(/Secondary/i);
    expect(badgeElement).toHaveClass("bg-secondary");
  });

  test("renders a destructive badge", () => {
    render(<Badge variant="destructive">Destructive</Badge>);
    const badgeElement = screen.getByText(/Destructive/i);
    expect(badgeElement).toHaveClass("bg-destructive");
  });

  test("renders an outline badge", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const badgeElement = screen.getByText(/Outline/i);
    expect(badgeElement).toHaveClass("text-foreground");
  });
});
