import { useState, useEffect } from 'react';

type ReturnSize = { width: number; height: number } | undefined;

const useWindowSize = (): ReturnSize => {
  function getSize(): ReturnSize {
    if (typeof window !== `undefined`) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize(): void {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
