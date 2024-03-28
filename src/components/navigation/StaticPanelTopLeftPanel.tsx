import { ComponentPropsWithRef, ComponentType } from "react";
import { IconLogo } from "../../assets/IconLogo";
import { ButtonFlat } from "../common/ButtonFlat";

type Props = {
  Icon: ComponentType<{ className: string | undefined }>;
} & ComponentPropsWithRef<"button">;

export function StaticPanelTopLeftPanel({ Icon, ...buttonProps }: Props) {
  return (
    <div className="flex items-center">
      <ButtonFlat className="mx-0" {...buttonProps} Icon={Icon} />
      <IconLogo className="h-5 mr-4" />
    </div>
  );
}
