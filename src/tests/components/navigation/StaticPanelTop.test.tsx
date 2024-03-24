import { render } from "@testing-library/react";
import { StaticPanelTop } from "../../../components/navigation/StaticPanelTop";

describe("StaticPanelTop component", () => {
  test("renders without errors", () => {
    render(<StaticPanelTop />);
    // Assert that the component renders without throwing any errors
  });
});
