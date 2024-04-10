import { List } from "../../components/common/List";
import { SearchBar } from "../../components/common/SearchBar";

export function Browse() {
  const items = [
    { title: "Undertake", subtitle: "01/12/2022" },
    { title: "Panache", subtitle: "01/20/2023" },
    { title: "Aperitif", subtitle: "07/01/2024" },
    { title: "Yuck", subtitle: "10/17/2021" },
    { title: "Menagerie", subtitle: "11/12/2022" },
    { title: "Trifling", subtitle: "11/19/2024" },
    { title: "Grisly", subtitle: "11/28/2023" },
    { title: "Ghoulish", subtitle: "12/01/2023" },
    { title: "Ostrich", subtitle: "05/05/2022" },
    { title: "Provost", subtitle: "07/27/2024" },
    { title: "Undertake", subtitle: "01/12/2022" },
    { title: "Panache", subtitle: "01/20/2023" },
    { title: "Aperitif", subtitle: "07/01/2024" },
    { title: "Yuck", subtitle: "10/17/2021" },
    { title: "Menagerie", subtitle: "11/12/2022" },
    { title: "Trifling", subtitle: "11/19/2024" },
    { title: "Grisly", subtitle: "11/28/2023" },
    { title: "Ghoulish", subtitle: "12/01/2023" },
    { title: "Ostrich", subtitle: "05/05/2022" },
    { title: "Provost", subtitle: "07/27/2024" },
  ];
  return (
    <>
      <SearchBar placeholder="Search up words and flashcards" />
      <List className="py-2" itemsPerPage={100} items={items} />
    </>
  );
}
