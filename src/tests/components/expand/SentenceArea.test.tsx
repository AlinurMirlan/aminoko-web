import { render, screen } from "@testing-library/react";
import { SentenceArea } from "../../../components/expand/SentenceArea";

test("renders SentenceArea component", () => {
  render(<SentenceArea />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeInTheDocument();
  const label = screen.getByText("Sentence");
  expect(label).toBeInTheDocument();
  const input = screen.getByText("Choose an image with text");
  expect(input).toBeInTheDocument();
});
