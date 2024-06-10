import { IconDelete } from "../../assets/IconDelete";
import { IconEdit } from "../../assets/IconEdit";
import { Button } from "../../components/common/Button";
import { InputForm } from "../../components/common/InputForm";

export function EditDeck() {
  return (
    <form>
      <InputForm id="#" label="Name" />
      <div className="flex gap-2">
        <Button Icon={IconEdit} className="">
          Edit
        </Button>
        <Button Icon={IconDelete} className="" colorVariant="error">
          Delete
        </Button>
      </div>
    </form>
  );
}
