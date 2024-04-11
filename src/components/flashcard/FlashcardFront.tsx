import { Button } from "../common/Button";
import { IconFlip } from "../../assets/IconFlip";
import { Flashcard } from "./Flashcard";
import { ComponentPropsWithRef } from "react";

type Props = {
  onClickFlip?: () => void;
} & ComponentPropsWithRef<"div">;

export function FlashcardFront({ children, onClickFlip, ...divProps }: Props) {
  return (
    <Flashcard
      {...divProps}
      BottomPanel={
        <Button
          className="w-full justify-center"
          buttonVariant="outline"
          Icon={IconFlip}
          onClick={onClickFlip}
        >
          Flip
        </Button>
      }
    >
      {children}
    </Flashcard>
  );
}
