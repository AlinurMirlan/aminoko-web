type Props = {
  className?: string;
};

export function IconTemplate({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M 5 3 C 3.897 3 3 3.897 3 5 L 3 6 C 3 7.103 3.897 8 5 8 L 19 8 C 20.103 8 21 7.103 21 6 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 5 10 C 3.897 10 3 10.897 3 12 L 3 19 C 3 20.103 3.897 21 5 21 L 11 21 C 12.103 21 13 20.103 13 19 L 13 12 C 13 10.897 12.103 10 11 10 L 5 10 z M 17 10 C 15.897 10 15 10.897 15 12 L 15 19 C 15 20.103 15.897 21 17 21 L 19 21 C 20.103 21 21 20.103 21 19 L 21 12 C 21 10.897 20.103 10 19 10 L 17 10 z" />
    </svg>
  );
}
