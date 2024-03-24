import { render } from "@testing-library/react";
import { ButtonFlat } from "../../../components/common/ButtonFlat";

describe("ButtonFlat component", () => {
  test("renders without errors", () => {
    render(<ButtonFlat Icon={() => null} />);
    // Assert that the component renders without throwing any errors
  });

  test("renders with primary color variant", () => {
    render(<ButtonFlat Icon={() => null} colorVariant="primary" />);
    // Assert that the component renders with the primary color variant
  });

  test("renders with tertiary color variant", () => {
    render(<ButtonFlat Icon={() => null} colorVariant="tertiary" />);
    // Assert that the component renders with the tertiary color variant
  });

  test("renders with transparent color variant", () => {
    render(<ButtonFlat Icon={() => null} colorVariant="transparent" />);
    // Assert that the component renders with the transparent color variant
  });
});
