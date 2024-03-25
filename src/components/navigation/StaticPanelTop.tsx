import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconLogo } from "../../assets/IconLogo";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";
import { ButtonFlat } from "../common/ButtonFlat";
import { IconSettings } from "../../assets/IconSettings";
import { useDimensions } from "../../services/useDimensions";
import { Button } from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { toggleSidebar } from "../../data/sidebarSlice";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.isSidebarOpen
  );
  const dispatch = useDispatch();

  const dimensions = useDimensions(ref);
  const colorBackground = "bg-background";

  const handleTogglePanel = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      ref={ref}
      className={`sticky z-10 top-0 ${colorBackground} flex justify-between items-center`}
    >
      <div className="z-10 flex items-center justify-between">
        <IconLogo className="px-4 h-5" />
      </div>
      <div className="z-10 flex">
        {children}
        <ButtonFlat Icon={IconBurgerMenu} onClick={handleTogglePanel} />
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            style={{ top: dimensions.height }}
            className={`absolute right-0 h-screen ${colorBackground} z-0`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-row-reverse py-2 px-4">
              <Button Icon={IconSettings} className="">
                Settings
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
