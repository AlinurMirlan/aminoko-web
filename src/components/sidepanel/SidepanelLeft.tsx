import { ComponentPropsWithoutRef } from "react";
import { Sidepanel } from "../common/Sidepanel";
import { SidebarPalette } from "../navigation/SidebarPalette";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

export function SidepanelLeft({ className }: Props) {
  return (
    <Sidepanel className={className}>
      <SidebarPalette />
    </Sidepanel>
  );
}
