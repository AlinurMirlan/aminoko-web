import { ComponentPropsWithRef, ComponentType, useState } from "react";
import { routePaths } from "../../router";
import {
  buttonFlatColorVariants,
  defaultButtonColorVariant,
} from "../../constants/buttons";
import { NavLink } from "react-router-dom";

type Props = {
  to: keyof typeof routePaths;
  className?: string;
  navLinkClassName?: string;
  colorVariant?: keyof typeof buttonFlatColorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
  Button: ComponentType<
    {
      className: string | undefined;
      colorVariant: typeof buttonFlatColorVariants.primary.inactive;
      Icon: ComponentType<{ className: string | undefined }>;
    } & ComponentPropsWithRef<"button">
  >;
} & ComponentPropsWithRef<"button">;

export function NavigationWrapper({
  to,
  Icon,
  Button,
  className,
  navLinkClassName,
  colorVariant = defaultButtonColorVariant,
  children,
  ...buttonProps
}: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      className={({ isActive }) => {
        setIsActive(isActive);
        return `flex justify-center flex-grow ${navLinkClassName}`;
      }}
      to={routePaths[to]}
    >
      <Button
        {...buttonProps}
        className={className}
        colorVariant={
          isActive
            ? buttonFlatColorVariants[colorVariant].active
            : buttonFlatColorVariants[colorVariant].inactive
        }
        Icon={Icon}
      >
        {children}
      </Button>
    </NavLink>
  );
}
