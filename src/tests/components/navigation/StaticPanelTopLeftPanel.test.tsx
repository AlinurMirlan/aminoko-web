// Tests for the StaticPanelTopLeftPanel component

import { render, screen } from "@testing-library/react";
import { StaticPanelTopLeftPanel } from "../../../components/navigation/StaticPanelTopLeftPanel";

describe("StaticPanelTopLeftPanel", () => {
  it("renders the StaticPanelTopLeftPanel component", () => {
    render(
      <StaticPanelTopLeftPanel onClick={() => {}} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
