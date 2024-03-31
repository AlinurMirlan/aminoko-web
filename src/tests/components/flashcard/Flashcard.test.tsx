import { render } from "@testing-library/react";
import { Flashcard } from "../../../components/flashcard/Flashcard";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("Flashcard", () => {
  it("renders the Flashcard component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Flashcard BottomPanel={<div>Bottom Panel</div>} />
        </MemoryRouter>
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
