import { render } from "@testing-library/react";
import { Home } from "../../../views/home/Home";

describe("Home component", () => {
  test("renders without errors", () => {
    render(<Home />);
    // Assert that the component renders without throwing any errors
  });
});
