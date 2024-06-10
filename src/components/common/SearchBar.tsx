import { useSelector } from "react-redux";
import { IconSearch } from "../../assets/IconSearch";
import { RootState } from "../../data/store";

type Props = React.ComponentPropsWithoutRef<"input">;

export function SearchBar({ ...inputProps }: Props) {
  const topPanelDimensions = useSelector(
    (state: RootState) => state.dimensions.topPanelDimensions
  );

  return (
    <div
      style={{
        top: topPanelDimensions.height,
      }}
      className="sticky flex gap-1 bg-surface-variant text-on-surface-variant px-2 rounded-full justify-between items-center"
    >
      <button className="px-2 py-3">
        <IconSearch className="fill-on-background h-5" />
      </button>
      <input
        className="outline-none w-full bg-transparent"
        type="text"
        {...inputProps}
      ></input>
    </div>
  );
}
