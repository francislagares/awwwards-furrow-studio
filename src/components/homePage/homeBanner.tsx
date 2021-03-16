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

const HomeBanner = (): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    const renderingElement = canvas.current;
    const drawingElement = renderingElement?.cloneNode() as HTMLCanvasElement;

    const drawingCtx = drawingElement?.getContext('2d');
    const renderingCtx = renderingElement?.getContext('2d');

    let lastX;
    let lastY;

    const moving = false;

    if (renderingCtx) {
      renderingCtx.globalCompositeOperation = 'source-over';
      renderingCtx.fillStyle = currentTheme === 'dark' ? '#000' : '#fff';
      renderingCtx.fillRect(0, 0, size.width, size.height);
    }
  }, [currentTheme]);

  return (
    <Banner>
      <Video>
        <video width='100%' height='100%' loop autoPlay src={VideoBackground} />
        <Canvas width={size.width} height={size.height} ref={canvas} />
        <BannerTitle>
          <HeadLine>DIG</HeadLine>
          <HeadLine>DEEP</HeadLine>
        </BannerTitle>
      </Video>
    </Banner>
  );
};

export default HomeBanner;
