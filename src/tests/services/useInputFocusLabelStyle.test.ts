import { act, renderHook } from "@testing-library/react";
import { useInputFocusLabelStyle } from "../../services/useInputFocusLabelStyle";
import jest from "jest-mock";

describe("useInputFocusLabelStyle", () => {
  it("should call onInputFocus when input is focused", () => {
    const onInputFocus = jest.fn();
    const props = { onInputFocus };

    const { result } = renderHook(() => useInputFocusLabelStyle(props));

    act(() => {
      result.current.onInputFocus();
    });

    expect(onInputFocus).toHaveBeenCalled();
  });

  it("should call onInputBlur when input is blurred", () => {
    const onInputBlur = jest.fn();
    const props = { onInputBlur };

    const { result } = renderHook(() => useInputFocusLabelStyle(props));

    act(() => {
      result.current.onInputBlur();
    });

    expect(onInputBlur).toHaveBeenCalled();
  });
});
