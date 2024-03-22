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

  it("does not render anything when error is undefined", () => {
    // Arrange

    // Act
    const { container } = render(<ErrorMessage error={undefined} />);

    // Assert
    expect(container.firstChild).toBeNull();
  });
});
