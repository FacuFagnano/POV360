import { useEffect, useRef, useState } from "react";

const useRevealOnScroll = (options = {}) => {
  const {
    threshold = 0.12,
    root = null,
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useRevealOnScroll;