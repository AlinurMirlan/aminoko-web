type Props = {
  className?: string;
};

export function IconFlip({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M 17 3 L 17 6 L 10 6 C 6.1456661 6 3 9.1456661 3 13 C 3 16.854334 6.1456661 20 10 20 L 20 20 L 20 18 L 10 18 C 7.2263339 18 5 15.773666 5 13 C 5 10.226334 7.2263339 8 10 8 L 17 8 L 17 11 L 21 7 L 17 3 z" />
    </svg>
  );
}
