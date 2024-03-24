import { ComponentPropsWithRef, ComponentType } from "react";
import { colorVariants } from "../../constants/buttons";

type Props = {
  className?: string;
  colorVariant?: keyof typeof colorVariants;
  Icon?: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function Button({
  Icon,
  className,
  colorVariant = "primary",
  children,
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`outline-none border-none rounded-full py-2 px-4 ${colorVariants[colorVariant].background} 
      ${colorVariants[colorVariant].text} hover:shadow-md transition-shadow duration-300 font-semibold 
      flex items-center gap-1 ${className}`}
    >
      {Icon && <Icon className={`h-4 ${colorVariants[colorVariant].fill}`} />}
      {children}
    </button>
  );
}
