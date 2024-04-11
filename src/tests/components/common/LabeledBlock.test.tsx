import { render, screen } from "@testing-library/react";
import { LabeledBlock } from "../../../components/common/LabeledBlock";

describe("LabeledBlock", () => {
  it("should render the title", () => {
    render(<LabeledBlock title="Title" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render the children", () => {
    render(<LabeledBlock title="Title">Children</LabeledBlock>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should render the label with the given className", () => {
    render(<LabeledBlock title="Title" className="custom-class" />);
    expect(screen.getByText("Title")).toHaveClass("custom-class");
  });

  it("should render the block with the given className", () => {
    render(<LabeledBlock title="Title" blockClassName="custom-class" />);
    expect(screen.getByText("Title").parentElement).toHaveClass("custom-class");
  });
});
