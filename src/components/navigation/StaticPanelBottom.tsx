import { ButtonFlat } from "../common/ButtonFlat";
import { IconBrowse } from "../../assets/IconBrowse";
import { IconExpand } from "../../assets/IconExpand";
import { IconHome } from "../../assets/IconHome";
import { IconRepeat } from "../../assets/IconRepeat";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function StaticPanelBottom() {
  const [showPanel, setShowPanel] = useState(true);

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
    };
  }, []);

  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          data-testid="static__panel__bottom"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 backdrop-blur-xl"
        >
          <div className="flex justify-stretch bg-secondary-container/30">
            <ButtonFlat Icon={IconHome} className="flex-grow" />
            <ButtonFlat Icon={IconRepeat} className="flex-grow" />
            <ButtonFlat
              colorVariant="tertiary"
              Icon={IconExpand}
              className="flex-grow"
            />
            <ButtonFlat Icon={IconBrowse} className="flex-grow" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
