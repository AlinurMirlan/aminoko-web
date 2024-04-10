import { List } from "../../components/common/List";
import { SearchBar } from "../../components/common/SearchBar";

export function Decks() {
  const items = [
    {
      title: "The House in Fata Morgana",
      subtitle: "01/12/2022",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Tokyo Ghoul",
      subtitle: "01/20/2023",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Ane No Tomodachi",
      subtitle: "07/01/2024",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "My Hero Academia",
      subtitle: "10/17/2021",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Naruto",
      subtitle: "11/12/2022",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Bleach",
      subtitle: "11/19/2024",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Arcane",
      subtitle: "11/28/2023",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Castlevania",
      subtitle: "12/01/2023",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "No Longer Human",
      subtitle: "05/05/2022",
      trailing: Math.floor(Math.random() * 201),
    },
    {
      title: "Norwegian Wood",
      subtitle: "07/27/2024",
      trailing: Math.floor(Math.random() * 201),
    },
  ];
  return (
    <>
      <SearchBar placeholder="Search up decks" />
      <List className="py-2" itemsPerPage={10} items={items} />
    </>
  );
}
