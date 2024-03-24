import { render } from "@testing-library/react";
import { NavigationPanelTop } from "../../../components/navigation/NavigationPanelTop";

describe("NavigationPanelTop component", () => {
  test("renders without errors when screenIsLg is true", () => {
    render(<NavigationPanelTop screenIsLg={true} />);
    // Assert that the component renders without throwing any errors
  });

  test("renders without errors when screenIsLg is false", () => {
    render(<NavigationPanelTop screenIsLg={false} />);
    // Assert that the component renders without throwing any errors
  });
});
