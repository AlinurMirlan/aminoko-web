import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconLogo } from "../../assets/IconLogo";
import { IconBurgerMenu } from "../../assets/IconBurgerMenu";
import { ButtonFlat } from "../common/ButtonFlat";
import { IconSettings } from "../../assets/IconSettings";
import { useDimensions } from "../../services/useDimensions";

type Props = {
  children?: React.ReactNode;
};

export function StaticPanelTop({ children }: Props) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(ref);

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <div
        ref={ref}
        className="sticky top-0 bg-secondary-container/50 backdrop-blur-xl flex justify-between items-center"
      >
        <div className="flex items-center justify-between">
          <IconLogo className="px-4 h-5" />
        </div>
        <div className="flex">
          {children}
          <ButtonFlat
            colorVariant="secondary"
            Icon={IconBurgerMenu}
            onClick={handleTogglePanel}
          />
        </div>
      </div>
      <AnimatePresence>
        {isPanelOpen && (
          <motion.aside
            style={{ top: dimensions.height }}
            className="fixed right-0 bg-secondary-container/50 backdrop-blur-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <ButtonFlat Icon={IconSettings} className="px-5">
                Settings
              </ButtonFlat>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
