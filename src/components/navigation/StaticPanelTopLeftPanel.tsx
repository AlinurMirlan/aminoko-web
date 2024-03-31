import { ComponentPropsWithRef } from "react";
import { IconLogo } from "../../assets/IconLogo";
import { ButtonFlat } from "../common/ButtonFlat";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";

type Props = ComponentPropsWithRef<"button">;

export function StaticPanelTopLeftPanel({ ...buttonProps }: Props) {
  return (
    <div className="flex items-center">
      <ButtonFlat
        className="ml-3 mr-1"
        {...buttonProps}
        Icon={IconBurgerMenu}
      />
      <IconLogo className="h-5 mr-4" />
    </div>
  );
}
