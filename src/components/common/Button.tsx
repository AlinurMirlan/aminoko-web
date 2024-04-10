import { ComponentPropsWithRef, ComponentType } from "react";
import { colorVariants } from "../../constants/buttons";

type Props = {
  className?: string;
  buttonVariant?: keyof typeof colorVariants;
  colorVariant?: keyof typeof colorVariants.outline;
  Icon?: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function Button({
  Icon,
  className,
  buttonVariant = "solid",
  colorVariant = "primary",
  children,
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`outline-none rounded-full py-2 px-4 ${colorVariants[buttonVariant][colorVariant].background} 
      ${colorVariants[buttonVariant][colorVariant].text} hover:shadow-md transition-shadow duration-300 font-medium 
      flex items-center gap-2 ${className}`}
    >
      {Icon && (
        <Icon
          className={`h-4 ${colorVariants[buttonVariant][colorVariant].fill}`}
        />
      )}
      {children}
    </button>
  );
}
