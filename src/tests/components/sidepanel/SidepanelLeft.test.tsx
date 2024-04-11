import { render } from "@testing-library/react";
import { SidepanelLeft } from "../../../components/sidepanel/SidepanelLeft";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("SidepanelLeft", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <SidepanelLeft />
      </Provider>
    );
    // Add your assertions here to check if the component renders correctly
  });

  it("renders with custom className", () => {
    const className = "custom-class";
    render(
      <Provider store={store}>
        <SidepanelLeft className={className} />
      </Provider>
    );
    // Add your assertions here to check if the component renders with the custom className
  });

  // Add more test cases as needed
});
