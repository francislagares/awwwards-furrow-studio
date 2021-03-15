/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
// @ts-ignore
import VideoBackground from '../../assets/video/video.mp4';
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  HeadLine,
} from '../../styles/homeStyles';

const HomeBanner = (): JSX.Element => {
  return (
    <Banner>
      <Video>
        <video width='100%' height='100%' loop autoPlay src={VideoBackground} />
        <Canvas />
        <BannerTitle>
          <HeadLine>DIG</HeadLine>
          <HeadLine>DEEP</HeadLine>
        </BannerTitle>
      </Video>
    </Banner>
  );
};

export default HomeBanner;
