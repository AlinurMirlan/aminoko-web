import { IconDelete } from "../../assets/IconDelete";
import { IconEdit } from "../../assets/IconEdit";
import { Button } from "../../components/common/Button";
import { InputForm } from "../../components/common/InputForm";
import { TextArea } from "../../components/common/TextArea";

export function EditTemplate() {
  return (
    <form className="flex flex-col gap-4 h-full">
      <InputForm id="#" label="Name" />
      <div className={`flex flex-grow`}>
        <TextArea
          className={`h-full`}
          blockClassName="flex-grow"
          title="Template Definition"
        />
      </div>
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
