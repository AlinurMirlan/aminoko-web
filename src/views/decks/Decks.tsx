import { List } from "../../components/common/List";
import { SearchBarButton } from "../../components/common/SearchBarButton";
import { routePaths } from "../../router";

export function Decks() {
  const items = [
    {
      title: "The House in Fata Morgana",
      subtitle: "01/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "1",
    },
    {
      title: "Tokyo Ghoul",
      subtitle: "01/20/2023",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "2",
    },
    {
      title: "Ane No Tomodachi",
      subtitle: "07/01/2024",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "3",
    },
    {
      title: "My Hero Academia",
      subtitle: "10/17/2021",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "4",
    },
    {
      title: "Naruto",
      subtitle: "11/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "5",
    },
    {
      title: "Bleach",
      subtitle: "11/19/2024",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "6",
    },
    {
      title: "Arcane",
      subtitle: "11/28/2023",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "7",
    },
    {
      title: "Castlevania",
      subtitle: "12/01/2023",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "8",
    },
    {
      title: "No Longer Human",
      subtitle: "05/05/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "9",
    },
    {
      title: "Norwegian Wood",
      subtitle: "07/27/2024",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "10",
    },
  ];
  return (
    <>
      <SearchBarButton
        placeholder="Search up templates"
        addRoute={routePaths.createDeck}
      />
      <List
        route={routePaths.editDeck}
        className="mx-3 py-2"
        itemsPerPage={10}
        items={items}
      />
    </>
  );
}
