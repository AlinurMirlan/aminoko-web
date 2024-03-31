import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isSidebarOpen: boolean;
  onOverlayClick: () => void;
}

export function SidebarOpenOverlay({ isSidebarOpen, onOverlayClick }: Props) {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onOverlayClick}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black z-10"
        />
      )}
    </AnimatePresence>
  );
}
