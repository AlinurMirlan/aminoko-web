import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../data/sidebarSlice";
import { StaticPanelTopLeftPanel } from "./StaticPanelTopLeftPanel";
import { SidebarNavigation } from "./SidebarNavigation";
import { useDimensions } from "../../services/useDimensions";
import { updateTopPanelDimensions } from "../../data/dimensionsSlice";
import { SidebarPalette } from "./SidebarPalette";
import { RootState } from "../../data/store";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
  const topPanelRef = useRef<HTMLDivElement>(null);
  const topPanelDimensions = useDimensions(topPanelRef);
  const dispatch = useDispatch();
  dispatch(updateTopPanelDimensions(topPanelDimensions));
  const handleTogglePanel = () => {
    dispatch(toggleSidebar());
  };
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);

  return (
    <>
      <div
        ref={topPanelRef}
        className={`sticky top-0 bg-background text-on-background flex justify-between items-center`}
      >
        <StaticPanelTopLeftPanel onClick={handleTogglePanel} />
        <div className="flex">{children}</div>
      </div>
      {!isScreenLg && (
        <SidebarNavigation onSidebarToggle={handleTogglePanel}>
          <SidebarPalette handleTogglePanel={handleTogglePanel} />
        </SidebarNavigation>
      )}
    </>
  );
}
