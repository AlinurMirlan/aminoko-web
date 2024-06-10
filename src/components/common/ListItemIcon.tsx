import { ComponentPropsWithoutRef } from "react";
import { IconPlay } from "../../assets/IconPlay";

type Props = {
  title: string;
  subtitle?: string;
} & ComponentPropsWithoutRef<"button">;

export function ListItemIcon({ title, subtitle, ...buttonProps }: Props) {
  return (
    <button className="flex gap-2 py-3 items-center w-full" {...buttonProps}>
      <div className="flex gap-4 items-center">
        <div></div>
        <div className="flex flex-col gap-1 items-start">
          <div className="">{title}</div>
          <div className="text-xs text-on-surface-variant">{subtitle}</div>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="text-xs text-on-surface-variant">
        <IconPlay />
      </div>
    </button>
  );
}
