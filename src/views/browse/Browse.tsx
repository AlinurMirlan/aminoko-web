import { List } from "../../components/common/List";
import { SearchBar } from "../../components/common/SearchBar";

export function Browse() {
  const items = [
    {
      title: "Undertake",
      subtitle: "Предпринять",
      trailing: "01/12/2022",
    },
    { title: "Panache", subtitle: "Щегольство", trailing: "01/20/2023" },
    { title: "Aperitif", subtitle: "Аперетиф", trailing: "07/01/2024" },
    { title: "Yuck", subtitle: "Ужас, отврат", trailing: "10/17/2021" },
    { title: "Menagerie", subtitle: "Зверинец", trailing: "11/12/2022" },
    {
      title: "Trifling",
      subtitle: "Незначительный, легкий",
      trailing: "11/19/2024",
    },
    { title: "Grisly", subtitle: "Отвратительный", trailing: "11/28/2023" },
    { title: "Ghoulish", subtitle: "Ужасный", trailing: "12/01/2023" },
    { title: "Ostrich", subtitle: "Страус", trailing: "05/05/2022" },
    { title: "Provost", subtitle: "Директор", trailing: "07/27/2024" },
    {
      title: "Undertake",
      subtitle: "Предпринять",
      trailing: "01/12/2022",
    },
    { title: "Panache", subtitle: "Щегольство", trailing: "01/20/2023" },
    { title: "Aperitif", subtitle: "Аперетиф", trailing: "07/01/2024" },
    { title: "Yuck", subtitle: "Ужас, отврат", trailing: "10/17/2021" },
    { title: "Menagerie", subtitle: "Зверинец", trailing: "11/12/2022" },
    {
      title: "Trifling",
      subtitle: "Незначительный, легкий",
      trailing: "11/19/2024",
    },
    { title: "Grisly", subtitle: "Отвратительный", trailing: "11/28/2023" },
    { title: "Ghoulish", subtitle: "Ужасный", trailing: "12/01/2023" },
    { title: "Ostrich", subtitle: "Страус", trailing: "05/05/2022" },
    { title: "Provost", subtitle: "Директор", trailing: "07/27/2024" },
  ];
  return (
    <>
      <SearchBar placeholder="Search up words and flashcards" />
      <List className="mx-3 py-2" itemsPerPage={100} items={items} />
    </>
  );
}
