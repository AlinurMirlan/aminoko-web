import { ComponentPropsWithRef, ComponentType } from "react";

const colorVariants = {
  primary: {
    text: "text-primary",
    fill: "fill-primary",
  },
  secondary: {
    text: "text-secondary",
    fill: "fill-secondary",
  },
  tertiary: {
    text: "text-tertiary",
    fill: "fill-tertiary",
  },
};

type Props = {
  className?: string;
  colorVariant?: keyof typeof colorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonFlat({
  Icon,
  className,
  colorVariant = "secondary",
  children,
  ...buttonProps
}: Props) {
  return (
    <button
      role="button"
      {...buttonProps}
      className={`${colorVariants[colorVariant].text} 
      outline-none border-none font-semibold flex gap-1 items-center justify-center p-4 ${className}`}
    >
      <Icon className={`h-6 ${colorVariants[colorVariant].fill}`} />
      {children}
    </button>
  );
}
