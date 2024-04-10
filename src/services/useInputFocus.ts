import { useRef } from "react";

type Props = {
  onInputFocus?: () => void;
  onInputBlur?: () => void;
};

export function useInputFocusLabelStyle(props?: Props) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const onInputFocus = () => {
    if (labelRef.current) {
      labelRef.current.classList.add("text-primary");
    }
    if (props?.onInputFocus) {
      props.onInputFocus();
    }
  };
  const onInputBlur = () => {
    if (labelRef.current) {
      labelRef.current.classList.remove("text-primary");
    }
    if (props?.onInputBlur) {
      props.onInputBlur();
    }
  };

  return { labelRef, onInputFocus, onInputBlur };
}
