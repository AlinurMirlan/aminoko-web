import { render } from "@testing-library/react";
import { StaticPanelBottom } from "../../../components/navigation/StaticPanelBottom";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("StaticPanelBottom component", () => {
  test("renders without errors", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <StaticPanelBottom />
        </Provider>
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });
});
