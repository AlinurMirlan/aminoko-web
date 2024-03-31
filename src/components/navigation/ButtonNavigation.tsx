import { ComponentPropsWithRef, ComponentType } from "react";
import { routePaths } from "../../router";
import { buttonFlatColorVariants } from "../../constants/buttons";
import { ButtonFlat } from "../common/ButtonFlat";
import { NavigationWrapper } from "./NavigationWrapper";

type Props = {
  to: keyof typeof routePaths;
  className?: string;
  navLinkClassName?: string;
  colorVariant?: keyof typeof buttonFlatColorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonNavigation({
  to,
  Icon,
  className,
  navLinkClassName,
  colorVariant,
  children,
  ...buttonProps
}: Props) {
  return (
    <NavigationWrapper
      {...buttonProps}
      Button={ButtonFlat}
      Icon={Icon}
      to={to}
      className={className}
      navLinkClassName={navLinkClassName}
      colorVariant={colorVariant}
    >
      {children}
    </NavigationWrapper>
  );
}
