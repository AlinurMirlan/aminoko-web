import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

export function ValidationErrorMessage({ error }: Props) {
  let visibility = "opacity-0";
  let errorMessage = "placeholder";
  if (error?.message) {
    visibility = "opacity-100";
    errorMessage = error.message;
  }
  return (
    <span
      className={`transition duration-300 text-error text-sm ${visibility}`}
    >
      {errorMessage}
    </span>
  );
}
