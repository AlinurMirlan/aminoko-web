import { IconPlus } from "../../assets/IconPlus";
import { Button } from "../../components/common/Button";
import { Dropdown } from "../../components/common/Dropdown";
import { InputForm } from "../../components/common/InputForm";
import { SentenceArea } from "../../components/expand/SentenceArea";

const margin = "mb-6";

export function Expand() {
  return (
    <form>
      <SentenceArea className={margin} />
      <InputForm id="#" label="Terms" />
      <Dropdown
        title="Deck"
        className={margin}
        options={[
          {
            value: "1",
            label: "Ane No Tomodachi",
          },
          {
            value: "2",
            label: "Boku No Hero Academia",
          },
          {
            value: "3",
            label: "One Piece",
          },
          {
            value: "4",
            label: "Naruto",
          },
          {
            value: "5",
            label: "Dragon Ball",
          },
        ]}
      />
      <Button Icon={IconPlus}>Create</Button>
    </form>
  );
}
