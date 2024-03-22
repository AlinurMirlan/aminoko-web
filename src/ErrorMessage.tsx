import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

export function ErrorMessage({ error }: Props) {
  let visibility = "invisible";
  let errorMessage = "placeholder";
  if (error?.message) {
    visibility = "visible";
    errorMessage = error.message;
  }
  return (
    <span className={`text-error text-sm ${visibility}`}>{errorMessage}</span>
  );
}
