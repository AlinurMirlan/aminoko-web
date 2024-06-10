import { useRef } from "react";
import { inputClass } from "../../constants/input";
import { useInputFocusLabelStyle } from "../../services/useInputFocusLabelStyle";
import { LabeledBlock } from "../common/LabeledBlock";

type Props = {
  title: string;
  className?: string;
  blockClassName?: string;
};

export function TextArea({ title, className, blockClassName }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { labelRef, onInputFocus, onInputBlur } = useInputFocusLabelStyle();
  return (
    <LabeledBlock blockClassName={blockClassName} ref={labelRef} title={title}>
      <textarea
        ref={textAreaRef}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        className={`appearance-none resize-none z-0 ${inputClass.style} ${className}`}
      ></textarea>
    </LabeledBlock>
  );
}
