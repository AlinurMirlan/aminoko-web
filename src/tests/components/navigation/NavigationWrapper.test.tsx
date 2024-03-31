import { render } from "@testing-library/react";
import { NavigationWrapper } from "../../../components/navigation/NavigationWrapper";
import { IconHome } from "../../../assets/IconHome";
import { ButtonFlatSidebar } from "../../../components/common/ButtonFlatSidebar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationWrapper", () => {
  it("renders the NavigationWrapper component", () => {
    render(
      <MemoryRouter>
        <NavigationWrapper
          to="home"
          Icon={IconHome}
          Button={ButtonFlatSidebar}
          colorVariant="primary"
        >
          Home
        </NavigationWrapper>
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });
});
