import { useSelector } from "react-redux";
import { IconDelete } from "../../assets/IconDelete";
import { IconEdit } from "../../assets/IconEdit";
import { ButtonFlatSidebar } from "../common/ButtonFlatSidebar";
import { RootState } from "../../data/store";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../router";

export function FlashcardOptionsPalette() {
  const navigate = useNavigate();
  const currentFlashcardId = useSelector(
    (state: RootState) => state.flashcard.currentFlashcardId
  );
  return (
    <>
      <ButtonFlatSidebar
        Icon={IconEdit}
        onClick={() =>
          navigate(`${routePaths.editFlashcard}/${currentFlashcardId}`)
        }
      >
        Edit
      </ButtonFlatSidebar>
      <ButtonFlatSidebar Icon={IconDelete}>Delete</ButtonFlatSidebar>
    </>
  );
}
