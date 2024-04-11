import { render } from "@testing-library/react";
import { Repeat } from "../../../views/repeat/Repeat";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("Repeat", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <Repeat />
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
