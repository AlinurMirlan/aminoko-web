import { ComponentPropsWithRef, ComponentType } from "react";
import { colorVariants } from "../../constants/buttons";
import { Button } from "./Button";

type Props = {
  className?: string;
  buttonVariant?: keyof typeof colorVariants;
  colorVariant?: keyof typeof colorVariants.outline;
  Icon?: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonIcon({
  Icon,
  className,
  buttonVariant = "solid",
  colorVariant = "primary",
  ...buttonProps
}: Props) {
  return (
    <Button
      {...buttonProps}
      Icon={Icon}
      className={`rounded-md [&&]:p-3 ${className}`}
      buttonVariant={buttonVariant}
      colorVariant={colorVariant}
    />
  );
}
