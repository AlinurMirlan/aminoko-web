import { render } from "@testing-library/react";
import { NavigationPanelTop } from "../../../components/navigation/NavigationPanelTop";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("NavigationPanelTop component", () => {
  test("renders without errors when screenIsLg is true", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationPanelTop />
        </Provider>
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });

  test("renders without errors when screenIsLg is false", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationPanelTop />
        </Provider>
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });
});
