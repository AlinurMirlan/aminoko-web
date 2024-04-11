import { ComponentPropsWithRef, useRef, useState } from "react";
import { Input } from "./Input";
import { useDimensions } from "../../services/useDimensions";
import { IconDropdown } from "../../assets/IconDropdown";
import { inputClass } from "../../constants/input";
import { useInputFocusLabelStyle } from "../../services/useInputFocusLabelStyle";
import { LabeledBlock } from "./LabeledBlock";

type Options = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  options: Options[];
  dropdownName?: string;
  className?: string;
} & ComponentPropsWithRef<"div">;

const dropdownInputFocusClass = ["[&&]:border-b-0", "rounded-b-none"];
const dropdownOptionCapacity = 3;
const dropdownViewPadding = 2;

export function Dropdown({ title, options, dropdownName, className }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const liRef = useRef<HTMLLIElement>(null);
  const liDimensions = useDimensions(liRef);
  const liHeight = liDimensions.height;

  const { labelRef, onInputFocus, onInputBlur } = useInputFocusLabelStyle({
    onInputFocus: () => {
      if (inputRef.current) {
        inputRef.current.classList.add(...dropdownInputFocusClass);
      }

      setDropdownOpen(true);
    },
    onInputBlur: () => {
      if (inputRef.current) {
        inputRef.current.classList.remove(...dropdownInputFocusClass);
      }

      setDropdownOpen(false);
    },
  });

  const onOptionClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    const target = event.target as HTMLLabelElement;
    if (inputRef.current) {
      inputRef.current.value = target.textContent || "";
    }

    setDropdownOpen(false);
  };

  return (
    <LabeledBlock
      title={title}
      blockClassName={className}
      ref={labelRef}
      className="z-10"
    >
      <div className="relative">
        <Input ref={inputRef} onFocus={onInputFocus} onBlur={onInputBlur} />
        <div className="absolute top-0 right-0 h-[85%] mt-1 flex items-center mx-2.5 bg-background">
          <IconDropdown
            className={`h-4 ${dropdownOpen && "stroke-2 stroke-primary"}`}
          />
        </div>
      </div>
      <ul
        style={{
          height:
            options.length > dropdownOptionCapacity
              ? liHeight * dropdownOptionCapacity + dropdownViewPadding
              : liHeight * options.length + dropdownViewPadding,
          overflow: "auto",
        }}
        className={`${
          !dropdownOpen && "hidden"
        } w-full rounded-md rounded-t-none ${inputClass.focusStyle} border-t-0`}
      >
        {options.map((option, index) => {
          return (
            <li key={index.toString()} className="" ref={liRef}>
              <input
                type="radio"
                id={index.toString()}
                name={dropdownName ?? "dropdown"}
                value={option.value}
                className="hidden"
              />
              <label
                htmlFor={index.toString()}
                className="px-2 py-3 block w-full"
                onMouseDown={onOptionClick}
              >
                {option.label}
              </label>
            </li>
          );
        })}
      </ul>
    </LabeledBlock>
  );
}
