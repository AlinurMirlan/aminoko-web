import { render } from "@testing-library/react";
import { Label } from "../../../components/common/Label";

describe("Label", () => {
  it("should render the label", () => {
    const { getByText } = render(<Label>Label</Label>);
    expect(getByText("Label")).toBeInTheDocument();
  });

  it("should render the label with the given className", () => {
    const { getByText } = render(<Label className="custom-class">Label</Label>);
    expect(getByText("Label")).toHaveClass("custom-class");
  });
});
