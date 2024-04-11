import { ButtonNavigation } from "./ButtonNavigation";
import { IconBrowse } from "../../assets/IconBrowse";
import { IconExpand } from "../../assets/IconExpand";
import { IconHome } from "../../assets/IconHome";
import { IconRepeat } from "../../assets/IconRepeat";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "../../services/useDimensions";
import { useDispatch } from "react-redux";
import { updateBottomPanelDimensions } from "../../data/dimensionsSlice";

const navButtonClass = "px-5";

export function StaticPanelBottom() {
  const [showPanel, setShowPanel] = useState(true);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelDimensions = useDimensions(bottomPanelRef);
  const dispatch = useDispatch();
  dispatch(updateBottomPanelDimensions(bottomPanelDimensions));

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowPanel(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      dispatch(updateBottomPanelDimensions({ width: 0, height: 0 }));
    };
  }, [dispatch]);

  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          ref={bottomPanelRef}
          data-testid="static__panel__bottom"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0"
        >
          <div className="flex justify-stretch bg-background text-on-background">
            <ButtonNavigation
              to="home"
              Icon={IconHome}
              className={navButtonClass}
            />
            <ButtonNavigation
              to="repeat"
              Icon={IconRepeat}
              className={navButtonClass}
            />
            <ButtonNavigation
              colorVariant="tertiary"
              Icon={IconExpand}
              to="expand"
              className={navButtonClass}
            />
            <ButtonNavigation
              to="browse"
              Icon={IconBrowse}
              className={navButtonClass}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
