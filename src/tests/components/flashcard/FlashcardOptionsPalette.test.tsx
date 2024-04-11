import { render, screen } from "@testing-library/react";
import { FlashcardOptionsPalette } from "../../../components/flashcard/FlashcardOptionsPalette";

describe("FlashcardOptionsPalette", () => {
  it("renders Edit and Delete buttons", () => {
    render(<FlashcardOptionsPalette />);
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
