import { render } from "@testing-library/react";
import { StaticPanelBottom } from "../../../components/navigation/StaticPanelBottom";

describe("StaticPanelBottom component", () => {
  test("renders without errors", () => {
    render(<StaticPanelBottom />);
    // Assert that the component renders without throwing any errors
  });
});
