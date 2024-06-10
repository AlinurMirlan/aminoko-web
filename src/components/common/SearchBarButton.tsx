import { useSelector } from "react-redux";
import { IconSearch } from "../../assets/IconSearch";
import { RootState } from "../../data/store";
import { Button } from "./Button";
import { IconPlus } from "../../assets/IconPlus";
import { useNavigate } from "react-router-dom";

type Props = {
  addRoute: string;
} & React.ComponentPropsWithoutRef<"input">;

export function SearchBarButton({ addRoute, ...inputProps }: Props) {
  const topPanelDimensions = useSelector(
    (state: RootState) => state.dimensions.topPanelDimensions
  );

  const navigate = useNavigate();

  return (
    <div
      style={{
        top: topPanelDimensions.height,
      }}
      className="sticky flex gap-1 w-full"
    >
      <div className="flex flex-grow gap-1 bg-surface-variant text-on-surface-variant px-2 rounded-full justify-between items-center">
        <button className="px-2 py-3">
          <IconSearch className="fill-on-background h-5" />
        </button>
        <input
          className="outline-none w-full bg-transparent"
          type="text"
          {...inputProps}
        ></input>
      </div>
      <Button Icon={IconPlus} onClick={() => navigate(addRoute)}>
        Create
      </Button>
    </div>
  );
}
