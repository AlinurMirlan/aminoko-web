type Props = {
  className?: string;
};

export function IconTune({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M 10 2 C 9.448 2 9 2.448 9 3 L 9 4 L 2 4 L 2 6 L 9 6 L 9 7 C 9 7.552 9.448 8 10 8 L 11 8 C 11.552 8 12 7.552 12 7 L 12 3 C 12 2.448 11.552 2 11 2 L 10 2 z M 14 4 L 14 6 L 22 6 L 22 4 L 14 4 z M 15 9 C 14.448 9 14 9.448 14 10 L 14 11 L 2 11 L 2 13 L 14 13 L 14 14 C 14 14.552 14.448 15 15 15 L 16 15 C 16.552 15 17 14.552 17 14 L 17 10 C 17 9.448 16.552 9 16 9 L 15 9 z M 19 11 L 19 13 L 22 13 L 22 11 L 19 11 z M 5 16 C 4.448 16 4 16.448 4 17 L 4 18 L 2 18 L 2 20 L 4 20 L 4 21 C 4 21.552 4.448 22 5 22 L 6 22 C 6.552 22 7 21.552 7 21 L 7 17 C 7 16.448 6.552 16 6 16 L 5 16 z M 9 18 L 9 20 L 22 20 L 22 18 L 9 18 z" />
    </svg>
  );
}
