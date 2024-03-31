import { useRef } from "react";
import { useDispatch } from "react-redux";
import { IconSettings } from "../../assets/IconSettings";
import { toggleSidebar } from "../../data/sidebarSlice";
import { ButtonSidebarNavigation } from "./ButtonSidebarNavigation";
import { StaticPanelTopLeftPanel } from "./StaticPanelTopLeftPanel";
import { IconTemplate } from "../../assets/IconTemplate";
import { IconBox } from "../../assets/IconBox";
import { SidebarNavigation } from "./SidebarNavigation";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
  const topPanelRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleTogglePanel = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div
        ref={topPanelRef}
        className={`sticky top-0 bg-background flex justify-between items-center`}
      >
        <StaticPanelTopLeftPanel
          onClick={handleTogglePanel}
        />
        <div className="flex">{children}</div>
      </div>
      <SidebarNavigation onSidebarToggle={handleTogglePanel}>
        <ButtonSidebarNavigation
          onClick={handleTogglePanel}
          Icon={IconTemplate}
          to="templates"
        >
          Templates
        </ButtonSidebarNavigation>
        <ButtonSidebarNavigation
          onClick={handleTogglePanel}
          Icon={IconBox}
          to="decks"
        >
          Decks
        </ButtonSidebarNavigation>
        <ButtonSidebarNavigation
          onClick={handleTogglePanel}
          Icon={IconSettings}
          to="settings"
        >
          Settings
        </ButtonSidebarNavigation>
      </SidebarNavigation>
    </>
  );
}
