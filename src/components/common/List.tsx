import { ComponentPropsWithoutRef } from "react";
import { ListItem } from "./ListItem";
import { useNavigate } from "react-router-dom";

type Props = {
  route: string;
  items: { id?: string; title: string; subtitle?: string; trailing?: string }[];
  itemsPerPage: number;
} & ComponentPropsWithoutRef<"ul">;

export function List({ route, items, itemsPerPage, ...ulProps }: Props) {
  const navigate = useNavigate();
  return (
    <ul {...ulProps}>
      {items.slice(0, itemsPerPage).map((item, index) => (
        <ListItem
          key={index}
          {...item}
          onClick={() => navigate(`${route}/${item.id}`)}
        />
      ))}
    </ul>
  );
}
