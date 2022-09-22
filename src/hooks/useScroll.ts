import { useState, useEffect, useRef, useCallback } from "react";

const useScroll = (throttlingDelay?: number) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttling = useRef(false);

  const updatePosition = useCallback(() => {
    if (throttlingDelay) {
      if (!throttling.current) {
        setScrollPosition(window.scrollY);
        throttling.current = true;
        setTimeout(() => {
          if (throttling.current) throttling.current = false;
        }, throttlingDelay);
      }
    } else {
      setScrollPosition(window.scrollY);
    }
  }, [throttlingDelay]);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [updatePosition]);

  return scrollPosition;
};

export default useScroll;
