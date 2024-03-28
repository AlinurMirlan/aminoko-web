// Tests for the SidebarOpenOverlay component

import { render } from "@testing-library/react";
import { SidebarOpenOverlay } from "../../../components/navigation/SidebarOpenOverlay";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("SidebarOpenOverlay", () => {
  it("renders the SidebarOpenOverlay component", () => {
    render(
      <Provider store={store}>
        <SidebarOpenOverlay />
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
