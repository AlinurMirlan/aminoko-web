import { ComponentPropsWithRef, ComponentType } from "react";
import { navButtonColorVariants } from "../../constants/buttons";

type Props = {
  className?: string;
  colorVariant?: { text: string; fill: string; bg: string };
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonFlat({
  Icon,
  className,
  colorVariant = navButtonColorVariants.secondary.inactive,
  children,
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`${colorVariant.text} ${colorVariant.bg} rounded-3xl
        outline-none font-semibold flex gap-3 items-center justify-center px-4 py-2 m-2 ${className}`}
    >
      <Icon className={`h-5 ${colorVariant.fill}`} />
      {children}
    </button>
  );
}
