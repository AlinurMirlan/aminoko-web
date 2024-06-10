import { ComponentPropsWithRef, ReactNode, useState } from "react";
import { IconTune } from "../../assets/IconTune";
import { IconUndo } from "../../assets/IconUndo";
import { ButtonIcon } from "../common/ButtonIcon";
import { Sidebar } from "../common/Sidebar";
import { FlashcardOptionsPalette } from "./FlashcardOptionsPalette";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

type Props = {
  BottomPanel: ReactNode;
  className?: string;
} & ComponentPropsWithRef<"div">;

export function Flashcard({
  children,
  BottomPanel,
  className,
  ...divProps
}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleTogglePanel = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const isScreenLg = useSelector((state: RootState) => state.breakpoint.isLg);

  return (
    <>
      <div className={`flex flex-col gap-3 ${className}`} {...divProps}>
        <div className="flex rounded-full items-center border border-outline/30">
          {!isScreenLg && (
            <ButtonIcon
              Icon={IconTune}
              colorVariant="secondary"
              buttonVariant="outline"
              className="border-none"
              onClick={handleTogglePanel}
            />
          )}
          <div className="flex-grow mx-2">12</div>
          <ButtonIcon
            Icon={IconUndo}
            buttonVariant="outline"
            className="border-none"
            colorVariant="secondary"
          />
        </div>
        <div className="border border-outline/30 flex flex-col p-3 flex-grow rounded-2xl overflow-auto">
          <div className="flex-grow">{children}</div>
        </div>
        <div className="flex gap-1">{BottomPanel}</div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleTogglePanel}
      >
        <FlashcardOptionsPalette />
      </Sidebar>
    </>
  );
}
