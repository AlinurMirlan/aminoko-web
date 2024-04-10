import { IconDelete } from "../../assets/IconDelete";
import { IconEdit } from "../../assets/IconEdit";
import { ButtonFlatSidebar } from "../common/ButtonFlatSidebar";

export function FlashcardOptionsPalette() {
  return (
    <>
      <ButtonFlatSidebar Icon={IconEdit}>Edit</ButtonFlatSidebar>
      <ButtonFlatSidebar Icon={IconDelete}>Delete</ButtonFlatSidebar>
    </>
  );
}
