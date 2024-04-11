import { render } from "@testing-library/react";
import { Decks } from "../../../views/decks/Decks";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("Decks", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <Decks />
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
