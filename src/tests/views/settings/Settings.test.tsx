import { render } from "@testing-library/react";
import { Settings } from "../../../views/settings/Settings";

describe("Settings", () => {
  test("renders without errors", () => {
    render(<Settings />);
    // Assert that the component renders without throwing any errors
  });
});
