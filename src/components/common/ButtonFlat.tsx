import { ComponentPropsWithRef, ComponentType } from "react";

const colorVariants = {
  primary: {
    onHover: "hover:bg-primary-container/60",
    text: "text-on-primary-container",
    fill: "fill-on-primary-container",
  },
  secondary: {
    onHover: "hover:bg-secondary-container/60",
    text: "text-on-secondary-container",
    fill: "fill-on-secondary-container",
  },
  tertiary: {
    onHover: "hover:bg-tertiary-container/60",
    text: "text-on-tertiary-container",
    fill: "fill-on-tertiary-container",
  },
  transparent: {
    onHover: "hover:bg-background/60",
    text: "text-on-background",
    fill: "fill-primary",
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
      className={`${colorVariants[colorVariant].onHover} ${colorVariants[colorVariant].text} 
      outline-none border-none font-semibold flex gap-1 items-center justify-center p-4 ${className}`}
    >
      <Icon className={`h-6 ${colorVariants[colorVariant].fill}`} />
      {children}
    </button>
  );
}
