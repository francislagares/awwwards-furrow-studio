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

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`;

export const Content = styled(motion.h2)`
  width: 53%;
  color: ${props => props.theme.text};
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
`;

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;

  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled(motion.div)`
  width: 100%;
  height: 480px;
  padding: 56px 124px;
  color: ${props => props.theme.text};
  box-sizing: border-box;

  h3 {
    font-size: 1.4rem;
  }

  .meta {
    display: flex;

    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    bottom: -128px;
    margin: 0;
    font-size: 7rem;
    font-weight: 900;
    position: absolute;
    line-height: 90px;

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        top: 16px;
        left: -48px;
        width: 108px;
        position: absolute;

        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  top: 0;
  width: 100%;
  height: 480px;
  position: absolute;
  z-index: -1;
  display: block;
  overflow: hidden;
`;

export const FeaturedProjects = styled.div`
  margin-top: 200px;

  button {
    padding: 20px;
    color: #fff;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;
    border: none;
    background: #ea281e;
    position: relative;
    display: block;
    line-height: 1;

    span {
      margin-right: 108px;
      display: block;
    }

    &::before,
    &::after {
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      content: '';
      position: absolute;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }

    &::before {
      margin-top: -8px;
    }

    &::after {
      margin-top: 8px;
    }
  }
`;

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`;
export const About = styled.div`
  width: 100%;

  h2 {
    width: 60%;
    color: ${props => props.theme.text};
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
  }

  p {
    color: ${props => props.theme.text};
    font-size: 1rem;
    max-width: 440px;
    line-height: 1.6rem;
    margin-left: 124px;
  }
`;
export const Services = styled.div``;

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  height: 32px;
  margin: 8px 0;
  color: #ea281e;
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  }
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;

  @media screen and (prefers-reduced-motion: reduce) {
    span {
      width: 16px;
      height: 4px;
      background: #ea281e;
      transition: none;
    }
  }

  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all .1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;

  span {
    width: 100%;
    margin: 8px 0;
    color: #ea281e;
    font-size: .875rem;
    font-weight: 300;
    display: block;
  }
`;
