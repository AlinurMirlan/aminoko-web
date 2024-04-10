import { ComponentPropsWithRef, forwardRef } from "react";
import { inputClass } from "../../constants/input";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...inputProps }, ref) => {
    return (
      <input
        {...inputProps}
        ref={ref}
        className={`
        ${inputClass.style}
         ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
