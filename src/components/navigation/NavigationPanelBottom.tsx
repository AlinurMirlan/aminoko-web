import { useSelector } from "react-redux";
import { StaticPanelBottom } from "./StaticPanelBottom";
import { RootState } from "../../data/store";

export function NavigationPanelBottom() {
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);
  return !isScreenLg && <StaticPanelBottom />;
}
