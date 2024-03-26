import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { toggleSidebar } from "../../data/sidebarSlice";
import { AnimatePresence, motion } from "framer-motion";

export function SidebarOpenOverlay() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.isSidebarOpen
  );

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={handleToggleSidebar}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black z-10"
        />
      )}
    </AnimatePresence>
  );
}
