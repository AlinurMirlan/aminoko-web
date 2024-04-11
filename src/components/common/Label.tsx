import { ComponentPropsWithRef, forwardRef } from "react";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"label">;

export const Label = forwardRef<HTMLLabelElement, Props>(function Label(
  { className, children, ...labelProps },
  ref
) {
  return (
    <label
      className={`block text-on-background text-sm font-medium mb-1 ${className}`}
      ref={ref}
      {...labelProps}
    >
      {children}
    </label>
  );
});
