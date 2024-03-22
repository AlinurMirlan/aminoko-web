import { render } from "@testing-library/react";
import { ErrorMessage } from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message when error is provided", () => {
    // Arrange
    const error = { type: "required", message: "This field is required" };

    // Act
    const { getByText } = render(<ErrorMessage error={error} />);

    // Assert
    expect(getByText(error.message)).toBeInTheDocument();
  });

  it("error message is invisible when error is not provided", () => {
    // Arrange
    const error = undefined;

    // Act
    const { container } = render(<ErrorMessage error={error} />);

    // Assert
    expect(container.firstChild).toHaveClass("invisible");
  });
});
