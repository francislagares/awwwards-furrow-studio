import { useState, useEffect } from 'react';

const useElementPosition = (el: any) => {
  function getElement(x: number, y: number) {
    return {
      x: x,
      y: y,
    };
  }

  const [elementPosition, setElementPosition] = useState(getElement);

  useEffect(() => {
    function handlePosition(): void {
      const element = el.current;
      const x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2;
      const y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2;
      setElementPosition(getElement(x, y));
    }
    handlePosition();
  }, [el]);

  return elementPosition;
};

export default useElementPosition;
