import { ComponentPropsWithRef, forwardRef, useRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

type Props = {
  label: string;
  id: string;
  error?: FieldError | undefined;
} & ComponentPropsWithRef<"input">;

export const FormInput = forwardRef<HTMLInputElement, Props>(function FormInput(
  { label, id, error, ...inputProps },
  ref
) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const onFocus = () => {
    if (labelRef.current) {
      labelRef.current.classList.add("text-primary");
    }
  };
  const onBlur = () => {
    if (labelRef.current) {
      labelRef.current.classList.remove("text-primary");
    }
  };
  return (
    <>
      <label
        ref={labelRef}
        htmlFor={id}
        className="block text-on-background text-sm font-medium mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        {...inputProps}
        onFocus={onFocus}
        onBlur={onBlur}
        className="border outline-none 
        hover:border-on-background 
        bg-background text-on-background
        focus:border-2 focus:border-primary focus:-m-[1px]
        border-outline rounded-md p-2 w-full"
      />
      <ErrorMessage error={error} />
    </>
  );
});

FormInput.displayName = "FormInput";
