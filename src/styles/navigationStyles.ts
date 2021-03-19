import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`;

export const NavHeader = styled.div`
  top: 72px;
  position: relative;

  h2 {
    color: ${props => props.theme.background};
  }
`;
export const CloseNav = styled.div`
  button {
    padding: 20px;
    border: none;
    transform-origin: center;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 8px;
      margin: 8px;
      display: block;
      background: ${props => props.theme.background};
    }
  }
`;

export const NavList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ul {
    padding: 0;

    li {
      height: 96px;
      font-size: 3rem;
      font-weight: 900;
      list-style: none;
      text-transform: uppercase;
      line-height: 96px;
      overflow: hidden;

      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;

        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }

      svg {
        width: 100px;

        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`;
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0;

  p {
    color: ${props => props.theme.background};
  }

  svg path {
    fill: ${props => props.theme.background};
  }
`;

export const NavVideos = styled.div`
  top: 0;
  bottom: 0;
  left: 25%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: #000;

  .reveal {
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #ea281e;
    position: absolute;
  }

  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;

    video {
      height: 100%;
    }
  }
`;
