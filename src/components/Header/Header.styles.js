import styled, { keyframes } from 'styled-components';

const hamburgerPuls = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
`;

export const HeaderSection = styled.section`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
`;

export const HeaderContainer = styled.div`
  min-height: 8vh;
  background-color: rgba(31, 30, 30, 0.24);
  transition: 0.3s ease background-color;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 0 10px;
`;

export const Brand = styled.div`
  a {
    text-decoration: none;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: white;

    span {
      color: crimson;
    }
  }
`;

export const NavList = styled.div`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      padding: 10px 20px;
      display: block;
      transition: 0.3s ease color;
    }

    li:hover a {
      color: crimson;
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      position: absolute;
      background-color: rgb(31, 30, 30);
      width: 100vw;
      height: 100vh;
      left: 100%;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
      overflow-x: hidden;
      transition: 0.5s ease left;

      &.active {
        left: 0%;
      }

      a {
        font-size: 2.5rem;
        padding: 20px;

        &::after {
          content: attr(data-after);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          color: rgba(240, 248, 255, 0.021);
          font-size: 13rem;
          letter-spacing: 50px;
          z-index: -1;
          transition: 0.3s ease letter-spacing;
        }
      }

      li:hover a::after {
        transform: translate(-50%, -50%) scale(1);
        letter-spacing: initial;
      }
    }
  }
`;

export const Hamburger = styled.div`
  height: 60px;
  width: 60px;
  display: none;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  transform: scale(0.8);
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    display: flex;

    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 3px solid white;
      animation: ${hamburgerPuls} 1s ease infinite;
    }
  }
`;

export const Bar = styled.div`
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: white;
    transition: 0.3s ease;
    transition-property: top, bottom;
  }

  &::after {
    top: 8px;
  }

  &::before {
    bottom: 8px;
  }

  ${Hamburger}.active & {
    &::before {
      bottom: 0;
    }

    &::after {
      top: 0;
    }
  }
`;