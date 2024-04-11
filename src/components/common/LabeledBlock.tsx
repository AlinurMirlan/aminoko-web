import { ComponentPropsWithRef, forwardRef } from "react";
import { Label } from "./Label";

type Props = {
  title: string;
  className?: string;
  blockClassName?: string;
} & ComponentPropsWithRef<"label">;

export const LabeledBlock = forwardRef<HTMLLabelElement, Props>(
  function LabeledBlock(
    { title, className, blockClassName, children, ...labelProps },
    labelRef
  ) {
    return (
      <div className={`relative mt-2 ${blockClassName}`}>
        <Label
          className={`absolute left-2 -top-3 bg-background px-1 ${className}`}
          {...labelProps}
          ref={labelRef}
        >
          {title}
        </Label>
        {children}
      </div>
    );
  }
);
