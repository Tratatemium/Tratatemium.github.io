import { useEffect, useState, useRef } from "react";
import { subscribe, getDirection } from "./scrollDirection";

function useInView(options) {
  const ref = useRef(null);
  // const exitDirection = useRef(false);

  const [isInView, setIsInView] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(getDirection());

  useEffect(() => {
    return subscribe(setIsScrollingUp);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.25) {
          setIsInView(true);
        }

        if (entry.intersectionRatio < 0.15) {
          setIsInView(false);
        }
      },
      { threshold: [0.15, 0.25] },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return [ref, isInView, isScrollingUp];
}

export default useInView;
