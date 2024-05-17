import { useEffect, useCallback } from "react";

interface DebounceProps {
  effect: Function;
  dependencies?: string[];
  delay?: number;
}

const useDebounce = ({
  effect,
  dependencies = [],
  delay = 500,
}: DebounceProps) => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDebounce;
