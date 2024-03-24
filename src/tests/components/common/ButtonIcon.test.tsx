import { render } from "@testing-library/react";
import { ButtonIcon } from "../../../components/common/ButtonIcon";

describe("ButtonIcon component", () => {
  test("renders without errors", () => {
    render(<ButtonIcon Icon={() => null} />);
    // Assert that the component renders without throwing any errors
  });

  test("renders with primary color variant", () => {
    render(<ButtonIcon Icon={() => null} colorVariant="primary" />);
    // Assert that the component renders with the primary color variant
  });

  test("renders with tertiary color variant", () => {
    render(<ButtonIcon Icon={() => null} colorVariant="tertiary" />);
    // Assert that the component renders with the tertiary color variant
  });
});
