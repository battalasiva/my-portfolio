import styled, { keyframes } from 'styled-components';

const textRevealBox = keyframes`
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`;

const textReveal = keyframes`
  100% {
    color: white;
  }
`;

const textRevealName = keyframes`
  100% {
    color: crimson;
    font-weight: 500;
  }
`;

export const HeroSection = styled.section`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: -1;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  display: block;
  width: fit-content;
  font-size: 4rem;
  position: relative;
  color: transparent;
  animation: ${textReveal} 0.5s ease forwards;
  animation-delay: ${props => props.delay || '1s'};

  &:nth-child(1) {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 2s;
  }

  &:nth-child(3) {
    animation: ${textRevealName} 0.5s ease forwards;
    animation-delay: 3s;
  }
`;

export const HeroSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: crimson;
  animation: ${textRevealBox} 1s ease;
  animation-delay: ${props => props.delay || '0.5s'};

  ${HeroTitle}:nth-child(1) & {
    animation-delay: 0.5s;
  }

  ${HeroTitle}:nth-child(2) & {
    animation-delay: 1.5s;
  }

  ${HeroTitle}:nth-child(3) & {
    animation-delay: 2.5s;
  }
`;

export const CtaButton = styled.a`
  display: inline-block;
  padding: 10px 30px;
  color: white;
  background-color: transparent;
  border: 2px solid crimson;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 30px;
  transition: 0.3s ease;
  transition-property: background-color, color;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: crimson;
  }
`;