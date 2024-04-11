import { render, screen } from "@testing-library/react";
import { Input } from "../../../components/common/Input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render the input with the given className", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });
});
