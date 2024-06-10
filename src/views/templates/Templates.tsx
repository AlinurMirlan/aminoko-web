import { List } from "../../components/common/List";
import { SearchBarButton } from "../../components/common/SearchBarButton";
import { routePaths } from "../../router";

export function Templates() {
  const items = [
    {
      title: "Default",
      subtitle: "01/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "1",
    },
    {
      title: "Image template",
      subtitle: "01/20/2023",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "2",
    },
    {
      title: "Text template",
      subtitle: "07/01/2024",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "3",
    },
    {
      title: "Audio template",
      subtitle: "10/17/2021",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "4",
    },
    {
      title: "Translation template",
      subtitle: "11/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "5",
    },
    {
      title: "Default",
      subtitle: "01/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "6",
    },
    {
      title: "Image template",
      subtitle: "01/20/2023",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "7",
    },
    {
      title: "Text template",
      subtitle: "07/01/2024",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "8",
    },
    {
      title: "Audio template",
      subtitle: "10/17/2021",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "9",
    },
    {
      title: "Translation template",
      subtitle: "11/12/2022",
      trailing: Math.floor(Math.random() * 201).toString(),
      id: "10",
    },
  ];
  return (
    <>
      <SearchBarButton
        placeholder="Search up templates"
        addRoute={routePaths.createTemplate}
      />
      <List
        route={routePaths.editTemplate}
        className="mx-3 py-2"
        itemsPerPage={10}
        items={items}
      />
    </>
  );
}
