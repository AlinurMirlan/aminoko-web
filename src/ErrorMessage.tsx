import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

export function ErrorMessage({ error }: Props) {
  return error && <span className="text-error text-sm">{error.message}</span>;
}
