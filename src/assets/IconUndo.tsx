type Props = {
  className?: string;
};

export function IconUndo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M 2 7 L 2 16 L 11 16 L 7.3789062 12.378906 C 8.7653195 11.211569 10.5449 10.5 12.5 10.5 C 16.034 10.5 19.024984 12.794656 20.083984 15.972656 L 22.451172 15.183594 C 21.062172 11.012594 17.138 8 12.5 8 C 9.8543339 8 7.4570807 8.9979817 5.6152344 10.615234 L 2 7 z" />
    </svg>
  );
}
