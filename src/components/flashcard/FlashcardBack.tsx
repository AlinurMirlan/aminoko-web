import { Button } from "../common/Button";
import { Flashcard } from "./Flashcard";
import { IconCross } from "../../assets/IconCross";
import { IconTick } from "../../assets/IconTick";
import { ButtonIcon } from "../common/ButtonIcon";
import { IconFlip } from "../../assets/IconFlip";
import { ComponentPropsWithRef } from "react";

type Props = {
  onClickForget?: () => void;
  onClickRecall?: () => void;
  onClickFlip?: () => void;
} & ComponentPropsWithRef<"div">;

export function FlashcardBack({
  children,
  onClickForget,
  onClickRecall,
  onClickFlip,
  ...divProps
}: Props) {
  return (
    <Flashcard
      {...divProps}
      BottomPanel={
        <>
          <Button
            className="w-full justify-center"
            Icon={IconCross}
            colorVariant="error"
            buttonVariant="outline"
            onClick={onClickForget}
          >
            Forget
          </Button>
          <Button
            className="w-full justify-center"
            buttonVariant="outline"
            Icon={IconTick}
            onClick={onClickRecall}
          >
            Recall
          </Button>
          <ButtonIcon
            Icon={IconFlip}
            buttonVariant="outline"
            colorVariant="tertiary"
            className=""
            onClick={onClickFlip}
          />
        </>
      }
    >
      {children}
    </Flashcard>
  );
}
