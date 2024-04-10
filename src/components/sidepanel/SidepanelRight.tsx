import { ComponentPropsWithoutRef } from "react";
import { Sidepanel } from "../common/Sidepanel";
import { FlashcardOptionsPalette } from "../flashcard/FlashcardOptionsPalette";
import { useLocation } from "react-router-dom";
import { routePaths } from "../../router";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

export function SidepanelRight({ className }: Props) {
  const location = useLocation();
  return (
    <Sidepanel className={className}>
      {location.pathname !== routePaths.repeat ? null : (
        <FlashcardOptionsPalette />
      )}
    </Sidepanel>
  );
}
