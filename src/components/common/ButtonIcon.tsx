import { ComponentPropsWithRef, ComponentType } from "react";
import { colorVariants } from "../../constants/buttons";

type Props = {
  className?: string;
  colorVariant?: keyof typeof colorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonIcon({
  Icon,
  className,
  colorVariant = "primary",
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`drop-shadow-md outline-none border-none rounded-xl ${colorVariants[colorVariant].background} 
      hover:shadow-md transition-shadow duration-150 flex items-center justify-center w-10 h-10 ${className}`}
    >
      <Icon className={`h-6 $${colorVariants[colorVariant].fill}`} />
    </button>
  );
}
