import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

describe("Alert component", () => {
  test("renders a default alert with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    );

    const titleElement = screen.getByText(/Heads up!/i);
    const descriptionElement = screen.getByText(
      /You can add components to your app using the cli./i
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders a destructive alert", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    );

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toHaveClass("text-destructive");
  });
});
