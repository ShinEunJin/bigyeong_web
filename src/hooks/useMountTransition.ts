import { useEffect, useRef, useState } from "react";

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [transition, setTransition] = useState(false);

  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMounted && !transition) {
      setTransition(true);
    }
    if (!isMounted && transition) {
      timeRef.current = setTimeout(() => setTransition(false), unmountDelay);
    }
    return () => clearTimeout(timeRef.current as NodeJS.Timeout);
  }, [unmountDelay, isMounted, transition]);

  return transition;
};

export default useMountTransition;
