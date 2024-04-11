import { render, screen } from "@testing-library/react";
import { StaticPanelTopLeftPanel } from "../../../components/navigation/StaticPanelTopLeftPanel";
import { store } from "../../../data/store";
import { Provider } from "react-redux";

describe("StaticPanelTopLeftPanel", () => {
  it("renders the StaticPanelTopLeftPanel component", () => {
    render(
      <Provider store={store}>
        <StaticPanelTopLeftPanel onClick={() => {}} />
      </Provider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
