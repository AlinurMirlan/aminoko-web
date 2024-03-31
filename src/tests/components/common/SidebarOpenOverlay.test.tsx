import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { SidebarOpenOverlay } from "../../../components/common/SidebarOpenOverlay";

describe("SidebarOpenOverlay", () => {
  it("renders the SidebarOpenOverlay component", () => {
    render(
      <Provider store={store}>
        <SidebarOpenOverlay isSidebarOpen={true} onOverlayClick={() => {}} />
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
