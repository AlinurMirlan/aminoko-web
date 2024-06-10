import { IconPlus } from "../../assets/IconPlus";
import { Button } from "../../components/common/Button";
import { InputForm } from "../../components/common/InputForm";

export function CreateDeck() {
  return (
    <form>
      <InputForm id="#" label="Name" />
      <Button Icon={IconPlus} className="w-min">
        Create
      </Button>
    </form>
  );
}
