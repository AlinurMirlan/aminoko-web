import { ComponentPropsWithoutRef } from "react";

type Props = {
  title: string;
  subtitle?: string;
  trailing?: string;
} & ComponentPropsWithoutRef<"button">;

export function ListItem({ title, subtitle, trailing, ...buttonProps }: Props) {
  return (
    <button className="flex gap-2 py-3 items-center w-full" {...buttonProps}>
      <div className="flex flex-col gap-1 items-start">
        <div className="">{title}</div>
        <div className="text-xs text-on-surface-variant">{subtitle}</div>
      </div>
      <div className="flex-grow"></div>
      <div className="text-xs text-on-surface-variant">{trailing}</div>
    </button>
  );
}
