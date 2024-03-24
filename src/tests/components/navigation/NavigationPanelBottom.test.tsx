import { render } from "@testing-library/react";
import { NavigationPanelBottom } from "../../../components/navigation/NavigationPanelBottom";

describe("NavigationPanelBottom component", () => {
  test("renders StaticPanelBottom when screenIsLg is false", () => {
    const { container } = render(<NavigationPanelBottom screenIsLg={false} />);
    expect(container.querySelector("#static__panel__bottom")).toBeNull();
  });

  test("does not render StaticPanelBottom when screenIsLg is true", () => {
    const { container } = render(<NavigationPanelBottom screenIsLg={true} />);
    expect(
      container.querySelector("#static__panel__bottom")
    ).not.toBeInTheDocument();
  });
});
