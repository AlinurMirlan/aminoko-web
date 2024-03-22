import { render, screen } from "@testing-library/react";
import { Authentication } from "../Authentication";

describe("Authentication", () => {
  it("renders the logo", () => {
    render(<Authentication />);

    // Assert that the Logo is rendered
    expect(screen.getByTestId("application__logo")).toBeInTheDocument();
  });
});
