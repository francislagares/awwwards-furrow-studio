/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useGlobalStateContext } from '../context/globalContext';
import { Cursor } from '../styles/globalStyles';

const CustomCursor = (): JSX.Element => {
  const { cursorType } = useGlobalStateContext();
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  });

  const onMouseMove = (event: any): void => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        className={`${!!cursorType ? cursorType : ''} ${cursorType}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
