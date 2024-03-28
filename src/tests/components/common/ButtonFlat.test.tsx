import { render } from "@testing-library/react";
import { ButtonNavigation } from "../../../components/navigation/ButtonNavigation";
import { MemoryRouter } from "react-router-dom";

describe("ButtonFlat component", () => {
  test("renders without errors", () => {
    render(
      <MemoryRouter>
        <ButtonNavigation Icon={() => null} to={"repeat"} />
      </MemoryRouter>
    );
    // Assert that the component renders without throwing any errors
  });

  test("renders with primary color variant", () => {
    render(
      <MemoryRouter>
        <ButtonNavigation
          Icon={() => null}
          colorVariant="primary"
          to={"repeat"}
        />
      </MemoryRouter>
    );
    // Assert that the component renders with the primary color variant
  });

  test("renders with secondary color variant", () => {
    render(
      <MemoryRouter>
        <ButtonNavigation
          Icon={() => null}
          colorVariant="secondary"
          to={"repeat"}
        />
      </MemoryRouter>
    );
    // Assert that the component renders with the tertiary color variant
  });

  test("renders with transparent color variant", () => {
    render(
      <MemoryRouter>
        <ButtonNavigation
          Icon={() => null}
          colorVariant="tertiary"
          to={"repeat"}
        />
      </MemoryRouter>
    );
    // Assert that the component renders with the transparent color variant
  });
});
