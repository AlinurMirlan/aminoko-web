import { ComponentPropsWithRef, ReactNode, useState } from "react";
import { IconTune } from "../../assets/IconTune";
import { IconUndo } from "../../assets/IconUndo";
import { ButtonIcon } from "../common/ButtonIcon";
import { Sidebar } from "../common/Sidebar";
import { IconEdit } from "../../assets/IconEdit";
import { IconDelete } from "../../assets/IconDelete";
import { ButtonFlatSidebar } from "../common/ButtonFlatSidebar";

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

  return (
    <>
      <div className={`flex flex-col gap-2 ${className}`} {...divProps}>
        <div className="flex gap-2">
          <ButtonIcon
            Icon={IconTune}
            buttonVariant="outline"
            colorVariant="tertiary"
            onClick={handleTogglePanel}
          />
          <div className="rounded-md flex-grow bg-secondary-container"></div>
          <ButtonIcon
            Icon={IconUndo}
            buttonVariant="outline"
            colorVariant="tertiary"
          />
        </div>
        <div className="p-2 flex-grow bg-secondary-container text-on-secondary-container rounded-md overflow-auto">
          {children}
        </div>
        <div className="flex gap-2">{BottomPanel}</div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleTogglePanel}
      >
        <ButtonFlatSidebar Icon={IconEdit}>Edit</ButtonFlatSidebar>
        <ButtonFlatSidebar Icon={IconDelete}>Delete</ButtonFlatSidebar>
      </Sidebar>
    </>
  );
}
