import { render } from "@testing-library/react";
import { Templates } from "../../../views/templates/Templates";

describe("Templates", () => {
  test("renders without errors", () => {
    render(<Templates />);
    // Assert that the component renders without throwing any errors
  });
});
