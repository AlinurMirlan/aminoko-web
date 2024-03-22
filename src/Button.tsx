import { ComponentPropsWithRef, ComponentType } from "react";

type Props = {
  className?: string;
  Icon?: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function Button({ Icon, className, children, ...buttonProps }: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`outline-none border-none rounded-full py-2 px-4 bg-primary-container text-on-primary-container 
      hover:shadow-md transition-shadow duration-300 font-semibold flex items-center gap-1 ${className}`}
    >
      {Icon && <Icon className="h-4 fill-on-primary-container" />}
      {children}
    </button>
  );
}
