import { render, screen } from "@testing-library/react";
import { ListItem } from "../../../components/common/ListItem";

describe("ListItem", () => {
  it("should render the title", () => {
    render(<ListItem title="Title" subtitle="Subtitle" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    render(<ListItem title="Title" subtitle="Subtitle" />);
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });
});
