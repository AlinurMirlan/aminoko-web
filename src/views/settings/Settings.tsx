import { ListIcon } from "../../components/common/ListIcon";

export function Settings() {
  const items = [
    {
      title: "Sign out",
    },
  ];
  return (
    <>
      <ListIcon items={items} itemsPerPage={10} className="space-y-2" />
    </>
  );
}
