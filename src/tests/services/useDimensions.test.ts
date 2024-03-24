import { renderHook } from "@testing-library/react";
import { useDimensions } from "../../services/useDimensions";
import { RefObject } from "react"; // Add this import
describe("useDimensions", () => {
  it("should return dimensions based on the provided ref", () => {
    const ref = {
      current: { offsetWidth: 100, offsetHeight: 200 },
    } as RefObject<HTMLElement>; // Add type annotation
    const { result } = renderHook(() => useDimensions(ref));

    expect(result.current).toEqual({ width: 100, height: 200 });
  });

  it("should return default dimensions when ref is null", () => {
    const ref: RefObject<HTMLElement> = { current: null }; // Add type annotation
    const { result } = renderHook(() => useDimensions(ref));

    expect(result.current).toEqual({ width: 0, height: 0 });
  });
});
