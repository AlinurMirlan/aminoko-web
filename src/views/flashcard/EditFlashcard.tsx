import { IconEdit } from "../../assets/IconEdit";
import { Button } from "../../components/common/Button";
import { TextArea } from "../../components/common/TextArea";

export function EditFlashcard() {
  return (
    <form className="flex flex-col gap-4 h-full">
      <div className={`flex flex-grow`}>
        <TextArea
          className={`h-full`}
          blockClassName="flex-grow"
          title="Front"
        />
      </div>
      <div className={`flex flex-grow`}>
        <TextArea
          className={`h-full`}
          blockClassName="flex-grow"
          title="Back"
        />
      </div>
      <Button Icon={IconEdit} className="w-min">
        Edit
      </Button>
    </form>
  );
}
