import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Index } from "../views/Index";
import { store } from "../data/store";

describe("Index component", () => {
  it("renders without error", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Index />
        </MemoryRouter>
      </Provider>
    );
    // Add your assertions here
  });

  // Add more test cases as needed
});
