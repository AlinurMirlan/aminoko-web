import { render } from "@testing-library/react";
import { SidepanelRight } from "../../../components/sidepanel/SidepanelRight";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("SidepanelRight", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SidepanelRight />
        </MemoryRouter>
      </Provider>
    );
    // Add your assertions here
  });

  it("applies the provided className", () => {
    const className = "custom-class";
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SidepanelRight className={className} />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toHaveClass(className);
  });

  // Add more test cases as needed
});
