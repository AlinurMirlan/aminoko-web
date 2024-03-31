import { RootState } from "../../data/store";
import { useSelector } from "react-redux";
import { ComponentPropsWithRef } from "react";
import { Sidebar } from "../common/Sidebar";
type Props = {
  onSidebarToggle: () => void;
} & ComponentPropsWithRef<"div">;

export function SidebarNavigation({ onSidebarToggle, children }: Props) {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.isSidebarOpen
  );
  return (
    <Sidebar isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle}>
      {children}
    </Sidebar>
  );
}
