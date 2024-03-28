import { ButtonNavigation } from "./ButtonNavigation";
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
      <ButtonNavigation to="home" Icon={IconHome}>
        Home
      </ButtonNavigation>
      <ButtonNavigation to="repeat" Icon={IconRepeat}>
        Repeat
      </ButtonNavigation>
      <ButtonNavigation to="expand" colorVariant="tertiary" Icon={IconExpand}>
        Expand
      </ButtonNavigation>
      <ButtonNavigation to="browse" Icon={IconBrowse}>
        Browse
      </ButtonNavigation>
    </StaticPanelTop>
  ) : (
    <StaticPanelTop />
  );
}
