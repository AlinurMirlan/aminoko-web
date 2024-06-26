type Props = {
  className?: string;
};

export function IconExpand({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M86,6L32,6c-7.2,0-13,5.8-13,13v90c0,7.2,5.8,13,13,13h64c7.2,0,13-5.8,13-13V29c0-6.1-2.4-11.9-6.7-16.3S92.1,6,86,6z M80.1,71.6c-0.5,0.5-1.3,0.9-2.1,0.9H67c0,0,0,0,0,0V83c0,0.8-0.3,1.6-0.9,2.1c-0.6,0.6-1.4,0.9-2.4,0.9c-1.6-0.1-2.8-1.6-2.8-3.2 V72.5c0,0,0,0,0,0l-10.8,0c-1.5,0-2.8-1-3.1-2.4c-0.3-1.9,1.1-3.6,2.9-3.6h11c0,0,0,0,0,0V55.1c0-1.5,1-2.8,2.4-3.1 c1.9-0.3,3.6,1.1,3.6,2.9v11.5c0,0,0,0,0,0h10.7c1.8,0,3.4,1.5,3.2,3.2C80.9,70.5,80.6,71.1,80.1,71.6z M96,26c-3.9,0-7-3.1-7-7 l0-6.7c3.4,0.6,6.5,2.2,9,4.7c2.5,2.5,4.1,5.6,4.7,9H96z" />
    </svg>
  );
}
