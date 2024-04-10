import { IconBox } from "../../assets/IconBox";
import { IconSettings } from "../../assets/IconSettings";
import { IconTemplate } from "../../assets/IconTemplate";
import { ButtonSidebarNavigation } from "./ButtonSidebarNavigation";

type Props = {
  handleTogglePanel?: () => void;
};

export function SidebarPalette(props?: Props) {
  return (
    <>
      <ButtonSidebarNavigation
        onClick={props?.handleTogglePanel}
        Icon={IconTemplate}
        to="templates"
      >
        Templates
      </ButtonSidebarNavigation>
      <ButtonSidebarNavigation
        onClick={props?.handleTogglePanel}
        Icon={IconBox}
        to="decks"
      >
        Decks
      </ButtonSidebarNavigation>
      <ButtonSidebarNavigation
        onClick={props?.handleTogglePanel}
        Icon={IconSettings}
        to="settings"
      >
        Settings
      </ButtonSidebarNavigation>
    </>
  );
}
