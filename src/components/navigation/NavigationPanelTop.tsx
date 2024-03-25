import { ButtonFlat } from "../common/ButtonFlat";
import { StaticPanelTop } from "./StaticPanelTop";
import { IconBrowse } from "../../assets/IconBrowse";
import { IconExpand } from "../../assets/IconExpand";
import { IconHome } from "../../assets/IconHome";
import { IconRepeat } from "../../assets/IconRepeat";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

export function NavigationPanelTop() {
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);

  return isScreenLg ? (
    <StaticPanelTop>
      <ButtonFlat Icon={IconHome}>Home</ButtonFlat>
      <ButtonFlat Icon={IconRepeat}>Repeat</ButtonFlat>
      <ButtonFlat colorVariant="tertiary" Icon={IconExpand}>
        Expand
      </ButtonFlat>
      <ButtonFlat Icon={IconBrowse}>Browse</ButtonFlat>
    </StaticPanelTop>
  ) : (
    <StaticPanelTop />
  );
}
