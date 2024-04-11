import { ComponentPropsWithoutRef } from "react";
import { ListItem } from "./ListItem";

type Props = {
  items: { title: string; subtitle: string }[];
  itemsPerPage: number;
} & ComponentPropsWithoutRef<"ul">;

export function List({ items, itemsPerPage, ...ulProps }: Props) {
  return (
    <ul {...ulProps}>
      {items.slice(0, itemsPerPage).map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
  );
}
