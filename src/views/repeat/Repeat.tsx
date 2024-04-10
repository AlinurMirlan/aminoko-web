import { FlashcardBack } from "../../components/flashcard/FlashcardBack";
import { useState } from "react";
import { FlashcardFront } from "../../components/flashcard/FlashcardFront";

export function Repeat() {
  const [isFlipped, setIsFlipped] = useState(false);

  return isFlipped ? (
    <FlashcardBack
      className="flex-grow"
      onClickFlip={() => setIsFlipped(false)}
    >
      Efface - принижать. To efface oneself is not the easiest of duties which
      the teacher can undertake.
    </FlashcardBack>
  ) : (
    <FlashcardFront
      className="flex-grow"
      onClickFlip={() => setIsFlipped(true)}
    >
      Make oneself appear insignificant or inconspicuous.
    </FlashcardFront>
  );
}
