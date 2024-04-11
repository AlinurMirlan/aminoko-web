import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

export function Sidepanel({ className, children }: Props) {
  const topPanelDimensions = useSelector(
    (state: RootState) => state.dimensions.topPanelDimensions
  );
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);

  return (
    <aside
      style={{ top: topPanelDimensions.height }}
      className={`flex-grow sticky flex-1 self-start ${className}`}
    >
      {isScreenLg ? <div className="w-fit">{children}</div> : null}
    </aside>
  );
}
