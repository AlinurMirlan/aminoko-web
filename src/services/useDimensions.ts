import { useMemo, useSyncExternalStore } from "react";

type Dimensions = {
  width: number;
  height: number;
};

function subscribe(callback: () => void): () => void {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

function useDimensions(ref: React.RefObject<HTMLElement>): Dimensions {
  const dimensions = useSyncExternalStore<string>(subscribe, () =>
    JSON.stringify({
      width: ref.current?.offsetWidth ?? 0,
      height: ref.current?.offsetHeight ?? 0,
    })
  );
  return useMemo(() => JSON.parse(dimensions) as Dimensions, [dimensions]);
}

export { useDimensions };
