import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;

  video {
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;
`;

export const HeadLine = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;

  /* prettier-ignore */
  line-height: .76;
`;
