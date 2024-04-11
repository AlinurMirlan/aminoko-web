import { ComponentPropsWithRef, ComponentType } from "react";
import {
  buttonFlatColorVariants,
  defaultButtonColorVariant,
} from "../../constants/buttons";

type Props = {
  className?: string;
  colorVariant?: typeof buttonFlatColorVariants.primary.inactive;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonFlat({
  Icon,
  className,
  colorVariant = buttonFlatColorVariants[defaultButtonColorVariant].inactive,
  children,
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`${colorVariant.text} ${colorVariant.bg} rounded-3xl
        outline-none font-medium flex gap-3 items-center justify-center px-3 py-1.5 m-2 my-3 ${className}`}
    >
      <Icon className={`h-5 ${colorVariant.fill}`} />
      {children}
    </button>
  );
}
