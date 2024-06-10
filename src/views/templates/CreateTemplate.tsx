import { IconPlus } from "../../assets/IconPlus";
import { Button } from "../../components/common/Button";
import { InputForm } from "../../components/common/InputForm";
import { TextArea } from "../../components/common/TextArea";

const margin = "mb-3";

export function CreateTemplate() {
  return (
    <form>
      <InputForm id="#" label="Name" />
      <div className={`${margin}`}>
        <TextArea className={`h-[400px]`} title="Template Definition" />
      </div>
      <Button Icon={IconPlus} className="w-min">
        Create
      </Button>
    </form>
  );
}
