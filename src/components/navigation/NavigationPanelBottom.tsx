import { StaticPanelBottom } from "./StaticPanelBottom";

type Props = {
  screenIsLg: boolean;
};

export function NavigationPanelBottom({ screenIsLg }: Props) {
  return !screenIsLg && <StaticPanelBottom />;
}
