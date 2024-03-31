import { render } from "@testing-library/react";
import { ButtonFlatSidebar } from "../../../components/common/ButtonFlatSidebar";
import { MemoryRouter } from "react-router-dom";

describe("ButtonFlatSidebar", () => {
  it("renders the ButtonFlatSidebar component", () => {
    render(
      <MemoryRouter>
        <ButtonFlatSidebar Icon={() => <div>Icon</div>} />
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });
});
