import { render } from "@testing-library/react";
import { StaticPanelTop } from "../../../components/navigation/StaticPanelTop";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("StaticPanelTop component", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <StaticPanelTop />
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
