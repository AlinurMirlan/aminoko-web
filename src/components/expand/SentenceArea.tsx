import { useRef } from "react";
import { IconPhoto } from "../../assets/IconPhoto";
import { inputClass } from "../../constants/input";
import { useInputFocusLabelStyle } from "../../services/useInputFocus";
import { LabeledBlock } from "../common/LabeledBlock";

type Props = {
  className?: string;
};

export function SentenceArea({ className }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { labelRef, onInputFocus, onInputBlur } = useInputFocusLabelStyle();
  return (
    <LabeledBlock blockClassName={className} ref={labelRef} title="Sentence">
      <textarea
        ref={textAreaRef}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        className={`appearance-none resize-none ${inputClass.style}`}
      ></textarea>
      <div className="relative">
        <label
          htmlFor="image"
          className="absolute top-0 left-0 h-full w-full"
        />
        <input id="image" type="file" className="hidden" />
        <div className="flex gap-3 items-end">
          <IconPhoto className="mb-[3px] h-5 fill-on-background" />
          <p className="mb-[1.5px]">Choose an image with text</p>
        </div>
      </div>
    </LabeledBlock>
  );
}
