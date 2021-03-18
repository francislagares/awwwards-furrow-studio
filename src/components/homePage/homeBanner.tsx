/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/media-has-caption */
// @ts-ignore
import React, { useEffect, useRef } from 'react';
import VideoBackground from '../../assets/video/video.mp4';
import { useGlobalStateContext } from '../../context/globalContext';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  HeadLine,
} from '../../styles/homeStyles';

const HomeBanner = ({ onCursor }): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    const renderingElement = canvas.current;
    const drawingElement = renderingElement?.cloneNode() as HTMLCanvasElement;

    const drawingCtx = drawingElement?.getContext('2d');
    const renderingCtx = renderingElement?.getContext('2d');

    let lastX: number;
    let lastY: number;

    let moving = false;

    if (renderingCtx) {
      renderingCtx.globalCompositeOperation = 'source-over';
      renderingCtx.fillStyle = currentTheme === 'dark' ? '#000' : '#fff';
      renderingCtx.fillRect(0, 0, size.width, size.height);
    }

    renderingElement?.addEventListener('mouseover', e => {
      moving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    renderingElement?.addEventListener('mouseup', e => {
      moving = false;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    renderingElement?.addEventListener('mousemove', e => {
      if (moving && drawingCtx && renderingCtx) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';
        const currentX = e.pageX - renderingElement.offsetLeft;
        const currentY = e.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 128;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentTheme, size.height, size.width]);

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner>
      <Video>
        <video
          width='100%'
          height='100%'
          loop
          autoPlay
          muted
          src={VideoBackground}
        />
        <Canvas
          width={size.width}
          height={size.height}
          ref={canvas}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
        />
        <BannerTitle variants={parent} initial='initial' animate='animate'>
          <HeadLine variants={child}>DIG</HeadLine>
          <HeadLine variants={child}>DEEP</HeadLine>
        </BannerTitle>
      </Video>
    </Banner>
  );
};

export default HomeBanner;
