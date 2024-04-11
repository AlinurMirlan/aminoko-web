import { ComponentPropsWithRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ValidationErrorMessage } from "./ValidationErrorMessage";
import { Input } from "./Input";
import { useInputFocusLabelStyle } from "../../services/useInputFocusLabelStyle";
import { LabeledBlock } from "./LabeledBlock";

type Props = {
  label: string;
  id: string;
  error?: FieldError | undefined;
  displayError?: boolean;
} & ComponentPropsWithRef<"input">;

export const InputForm = forwardRef<HTMLInputElement, Props>(function FormInput(
  { label, id, error, displayError = true, ...inputProps },
  ref
) {
  const { labelRef, onInputFocus, onInputBlur } = useInputFocusLabelStyle();
  return (
    <>
      <LabeledBlock title={label} ref={labelRef} htmlFor={id}>
        <Input
          id={id}
          ref={ref}
          {...inputProps}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        {displayError ? <ValidationErrorMessage error={error} /> : null}
      </LabeledBlock>
    </>
  );
});

InputForm.displayName = "FormInput";
