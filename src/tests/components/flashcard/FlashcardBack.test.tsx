import { render } from "@testing-library/react";
import { FlashcardBack } from "../../../components/flashcard/FlashcardBack";
import { Provider } from "react-redux";
import { store } from "../../../data/store";
import { MemoryRouter } from "react-router-dom";

describe("FlashcardBack", () => {
  it("renders the FlashcardBack component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FlashcardBack />
        </MemoryRouter>
      </Provider>
    );
    // Assert that the component renders without throwing any errors
  });
});
