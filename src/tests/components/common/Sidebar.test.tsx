import { render } from "@testing-library/react";
import { Sidebar } from "../../../components/common/Sidebar";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar", () => {
  it("renders the Sidebar component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar isSidebarOpen={false} onSidebarToggle={() => {}} />
        </MemoryRouter>
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
