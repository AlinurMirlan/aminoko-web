import { render, screen } from "@testing-library/react";
import { Button } from "../../../components/common/Button";

describe("Button", () => {
  it("renders button text", () => {
    // Render the Button component with the text "Click me"
    render(<Button>Click me</Button>);

    // Check if the button element with the text "Click me" is in the document
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders button with custom class name", () => {
    // Render the Button component with the text "Click me" and a custom class name "custom-button"
    render(<Button className="custom-button">Click me</Button>);

    // Check if the button element with the text "Click me" has the class name "custom-button"
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveClass("custom-button");
  });

  it("renders button with icon", () => {
    // Define a mock icon component
    const MockIcon = () => <span className="mock-icon">Icon</span>;

    // Render the Button component with the text "Click me" and the mock icon component
    render(<Button Icon={MockIcon}>Click me</Button>);

    // Check if the icon element with the text "Icon" is in the document
    const iconElement = screen.getByText("Icon");
    expect(iconElement).toBeInTheDocument();
  });
});
