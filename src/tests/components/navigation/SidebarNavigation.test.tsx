import { render } from "@testing-library/react";
import { SidebarNavigation } from "../../../components/navigation/SidebarNavigation";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("SidebarNavigation", () => {
  it("renders the SidebarNavigation component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SidebarNavigation onSidebarToggle={() => {}}>
            Children
          </SidebarNavigation>
        </MemoryRouter>
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
