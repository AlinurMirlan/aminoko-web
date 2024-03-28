import { ComponentPropsWithRef, ComponentType, useState } from "react";
import { routePaths } from "../../router";
import { navButtonColorVariants } from "../../constants/buttons";
import { NavLink } from "react-router-dom";
import { ButtonFlat } from "../common/ButtonFlat";

type Props = {
  to: keyof typeof routePaths;
  className?: string;
  navLinkClassName?: string;
  colorVariant?: keyof typeof navButtonColorVariants;
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function ButtonNavigation({
  to,
  Icon,
  className,
  navLinkClassName,
  colorVariant = "secondary",
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
      <ButtonFlat
        {...buttonProps}
        className={className}
        colorVariant={
          isActive
            ? navButtonColorVariants[colorVariant].active
            : navButtonColorVariants[colorVariant].inactive
        }
        Icon={Icon}
      >
        {children}
      </ButtonFlat>
    </NavLink>
  );
}
