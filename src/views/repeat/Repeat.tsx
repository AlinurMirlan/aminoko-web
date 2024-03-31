import { useSelector } from "react-redux";
import { FlashcardBack } from "../../components/flashcard/FlashcardBack";
import { RootState } from "../../data/store";
import { useEffect, useState } from "react";
import { FlashcardFront } from "../../components/flashcard/FlashcardFront";

type FlashcardData = { front: string; back: string };

export function Repeat() {
  useEffect(() => {
    async function fetchFlashcards() {
      const response = await fetch("../../dummyFlashcardData.json");
      const data = (await response.json()) as FlashcardData;
      return data;
    }

    fetchFlashcards()
      .then((data) => {
        setFlashcardData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const bottomPanelDimensions = useSelector(
    (state: RootState) => state.dimensions.bottomPanelDimensions
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardData, setFlashcardData] = useState<FlashcardData>({
    front: "",
    back: "",
  });

  return (
    <div className="flex flex-col flex-grow">
      {isFlipped ? (
        <FlashcardBack
          className="flex-grow"
          onClickFlip={() => setIsFlipped(false)}
        >
          {flashcardData.back}
        </FlashcardBack>
      ) : (
        <FlashcardFront
          className="flex-grow"
          onClickFlip={() => setIsFlipped(true)}
        >
          {flashcardData.front}
        </FlashcardFront>
      )}
      <div style={{ height: bottomPanelDimensions.height }}></div>
    </div>
  );
}
