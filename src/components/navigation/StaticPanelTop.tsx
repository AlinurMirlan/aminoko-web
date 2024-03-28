import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";
import { IconSettings } from "../../assets/IconSettings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { toggleSidebar } from "../../data/sidebarSlice";
import { StaticPanelTopLeftPanel } from "./StaticPanelTopLeftPanel";
import { ButtonSidebarNavigation } from "./ButtonSidebarNavigation";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
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
        className={`sticky top-0 ${colorBackground} flex justify-between items-center`}
      >
        <StaticPanelTopLeftPanel
          Icon={IconBurgerMenu}
          onClick={handleTogglePanel}
        />
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
            <StaticPanelTopLeftPanel
              Icon={IconBurgerMenu}
              onClick={handleTogglePanel}
            />
            <div className="">
              <div className="flex flex-col p-2 items-start gap-1">
                <ButtonSidebarNavigation
                  onClick={handleTogglePanel}
                  Icon={IconSettings}
                  to="templates"
                >
                  Templates
                </ButtonSidebarNavigation>
                <ButtonSidebarNavigation
                  onClick={handleTogglePanel}
                  Icon={IconSettings}
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
