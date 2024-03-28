import { render } from "@testing-library/react";
import { NavigationPanelBottom } from "../../../components/navigation/NavigationPanelBottom";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("NavigationPanelBottom component", () => {
  test("renders StaticPanelBottom when screenIsLg is false", () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationPanelBottom />
        </Provider>
      </MemoryRouter>
    );
    expect(container.querySelector("#static__panel__bottom")).toBeNull();
  });

  test("does not render StaticPanelBottom when screenIsLg is true", () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationPanelBottom />
        </Provider>
      </MemoryRouter>
    );
    expect(
      container.querySelector("#static__panel__bottom")
    ).not.toBeInTheDocument();
  });
});
