import { ComponentPropsWithRef, ComponentType } from "react";
import { buttonFlatColorVariants } from "../../constants/buttons";
import { ButtonFlat } from "./ButtonFlat";

type Props = {
  className?: string;
  colorVariant?: typeof buttonFlatColorVariants.primary.inactive;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonFlatSidebar({
  Icon,
  className,
  colorVariant,
  children,
  ...buttonProps
}: Props) {
  return (
    <ButtonFlat
      Icon={Icon}
      className={`[&&]:justify-start gap-4 w-full [&&]:my-0 ${className}`}
      colorVariant={colorVariant}
      {...buttonProps}
    >
      {children}
    </ButtonFlat>
  );
}
