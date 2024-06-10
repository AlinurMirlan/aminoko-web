import { ComponentPropsWithoutRef } from "react";
import { ListItemIcon } from "./ListItemIcon";

type Props = {
  items: { title: string; subtitle?: string }[];
  itemsPerPage: number;
} & ComponentPropsWithoutRef<"ul">;

export function ListIcon({ items, itemsPerPage, ...ulProps }: Props) {
  return (
    <ul {...ulProps}>
      {items.slice(0, itemsPerPage).map((item, index) => (
        <ListItemIcon key={index} {...item} />
      ))}
    </ul>
  );
}
