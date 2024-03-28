import { ComponentPropsWithRef, ComponentType } from "react";
import { routePaths } from "../../router";
import { ButtonNavigation } from "./ButtonNavigation";
import { navButtonColorVariants } from "../../constants/buttons";

type Props = {
  to: keyof typeof routePaths;
  className?: string;
  navLinkClassName?: string;
  colorVariant?: keyof typeof navButtonColorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonSidebarNavigation({
  to,
  Icon,
  className,
  navLinkClassName,
  colorVariant,
  children,
  ...buttonProps
}: Props) {
  return (
    <ButtonNavigation
      colorVariant={colorVariant}
      className={`[&&]:justify-start w-full my-0 ${className}`}
      navLinkClassName={`w-full ${navLinkClassName}`}
      {...buttonProps}
      Icon={Icon}
      to={to}
    >
      {children}
    </ButtonNavigation>
  );
}
