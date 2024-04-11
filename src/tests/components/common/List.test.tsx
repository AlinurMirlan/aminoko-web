import { render, screen } from "@testing-library/react";
import { List } from "../../../components/common/List";

describe("List", () => {
  it("should render the items", () => {
    const items = [
      { title: "Item 1", subtitle: "Subtitle 1" },
      { title: "Item 2", subtitle: "Subtitle 2" },
      { title: "Item 3", subtitle: "Subtitle 3" },
    ];
    render(<List items={items} itemsPerPage={3} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.subtitle)).toBeInTheDocument();
    });
  });

  it("should render the items up to the itemsPerPage limit", () => {
    const items = [
      { title: "Item 1", subtitle: "Subtitle 1" },
      { title: "Item 2", subtitle: "Subtitle 2" },
      { title: "Item 3", subtitle: "Subtitle 3" },
    ];
    render(<List items={items} itemsPerPage={2} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.queryByText("Item 3")).not.toBeInTheDocument();
  });
});
