import { ComponentPropsWithRef } from "react";
import { IconLogo } from "../../assets/IconLogo";
import { ButtonFlat } from "../common/ButtonFlat";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

type Props = ComponentPropsWithRef<"button">;

export function StaticPanelTopLeftPanel({ ...buttonProps }: Props) {
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);
  return (
    <div className="flex items-center">
      {!isScreenLg && (
        <ButtonFlat
          className="ml-3 mr-1"
          {...buttonProps}
          Icon={IconBurgerMenu}
        />
      )}
      <IconLogo className={`h-5 mr-4 ${isScreenLg && "ml-5"}`} />
    </div>
  );
}
