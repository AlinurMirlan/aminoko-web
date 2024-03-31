import { ComponentPropsWithRef, ComponentType } from "react";
import { routePaths } from "../../router";
import { buttonFlatColorVariants } from "../../constants/buttons";
import { NavigationWrapper } from "./NavigationWrapper";
import { ButtonFlatSidebar } from "../common/ButtonFlatSidebar";

type Props = {
  to: keyof typeof routePaths;
  className?: string;
  navLinkClassName?: string;
  colorVariant?: keyof typeof buttonFlatColorVariants;
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
    <NavigationWrapper
      {...buttonProps}
      Button={ButtonFlatSidebar}
      Icon={Icon}
      to={to}
      className={className}
      navLinkClassName={`${navLinkClassName} w-full`}
      colorVariant={colorVariant}
    >
      {children}
    </NavigationWrapper>
  );
}
