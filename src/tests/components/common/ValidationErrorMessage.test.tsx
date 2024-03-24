import { render } from "@testing-library/react";
import { ValidationErrorMessage } from "../../../components/common/ValidationErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message when error is provided", () => {
    // Arrange
    const error = { type: "required", message: "This field is required" };

    // Act
    const { getByText } = render(<ValidationErrorMessage error={error} />);

    // Assert
    expect(getByText(error.message)).toBeInTheDocument();
  });

  it("error message's opacity is 0 when error is not provided", () => {
    // Arrange
    const error = undefined;

    // Act
    const { container } = render(<ValidationErrorMessage error={error} />);

    // Assert
    expect(container.firstChild).toHaveClass("opacity-0");
  });
});
