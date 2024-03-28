// Tests for the StaticPanelTopLeftPanel component

import { render, screen } from "@testing-library/react";
import { StaticPanelTopLeftPanel } from "../../../components/navigation/StaticPanelTopLeftPanel";
import { IconBurgerMenu } from "../../../assets/IconBurgerMenu";

describe("StaticPanelTopLeftPanel", () => {
  it("renders the StaticPanelTopLeftPanel component", () => {
    render(
      <StaticPanelTopLeftPanel Icon={IconBurgerMenu} onClick={() => {}} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
