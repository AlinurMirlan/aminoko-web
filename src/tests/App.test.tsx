import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./../App";

test("button click should increase count", async () => {
  render(<App />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
