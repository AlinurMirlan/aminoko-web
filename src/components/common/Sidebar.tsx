import { AnimatePresence, motion } from "framer-motion";
import { ComponentPropsWithRef, useEffect } from "react";
import { StaticPanelTopLeftPanel } from "../navigation/StaticPanelTopLeftPanel";
import { SidebarOpenOverlay } from "./SidebarOpenOverlay";

type Props = {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
} & ComponentPropsWithRef<"div">;

const sidebarVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
  },
};

export function Sidebar({ isSidebarOpen, onSidebarToggle, children }: Props) {
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed left-0 top-0 bottom-0 h-screen  bg-background z-20`}
          >
            <StaticPanelTopLeftPanel
              onClick={onSidebarToggle}
            />
            <div className="">
              <div className="flex flex-col p-1 items-start gap-1">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SidebarOpenOverlay
        isSidebarOpen={isSidebarOpen}
        onOverlayClick={onSidebarToggle}
      />
    </>
  );
}
