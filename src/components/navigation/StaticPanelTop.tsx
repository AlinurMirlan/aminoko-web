import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconLogo } from "../../assets/IconLogo";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";
import { ButtonFlat } from "../common/ButtonFlat";
import { IconSettings } from "../../assets/IconSettings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { toggleSidebar } from "../../data/sidebarSlice";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
  const topPanelRef = useRef<HTMLDivElement>(null);
  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.isSidebarOpen
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const colorBackground = "bg-background";

  const handleTogglePanel = () => {
    dispatch(toggleSidebar());
  };

  const sidebarVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
    },
  };

  return (
    <>
      <div
        ref={topPanelRef}
        className={`sticky top-0 ${colorBackground} flex justify-between items-center`}
      >
        <div className="flex items-center">
          <ButtonFlat Icon={IconBurgerMenu} onClick={handleTogglePanel} />
          <IconLogo className="h-5 mr-4" />
        </div>
        <div className="flex">{children}</div>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed left-0 top-0 bottom-0 h-screen  ${colorBackground} z-20`}
          >
            <div className="flex items-center">
              <ButtonFlat Icon={IconBurgerMenu} onClick={handleTogglePanel} />
              <IconLogo className="h-5 mr-4" />
            </div>
            <div className="px-4 py-2">
              <div className="flex">
                <ButtonFlat Icon={IconSettings} className="p-0">
                  Settings
                </ButtonFlat>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
