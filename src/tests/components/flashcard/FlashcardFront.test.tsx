import { render } from "@testing-library/react";
import { FlashcardFront } from "../../../components/flashcard/FlashcardFront";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("FlashcardFront", () => {
  it("renders the FlashcardFront component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FlashcardFront />
        </MemoryRouter>
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
