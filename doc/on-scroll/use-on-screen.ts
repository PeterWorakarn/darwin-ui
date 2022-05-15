import { useState, useEffect } from 'react';

const useOnScreen = (
  ref: React.RefObject<any>,
  rootMargin = '0px',
  onlyOnce = false,
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.requestAnimationFrame(() => {
          setIntersecting(entry.isIntersecting);
        });
        if (
          entry.isIntersecting
          && onlyOnce
          && ref.current
        ) {
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};

export default useOnScreen;
