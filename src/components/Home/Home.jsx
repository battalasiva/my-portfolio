import React from "react";
import { useSelector } from "react-redux";
import heroBg from "../../assets/hero-bg.png";
import { HeroSection, HeroContainer, HeroTitle, HeroSpan, CtaButton } from "./Home.styles";

const Home = () => {
  const { data: portfolio } = useSelector((state) => state.portfolio);
  const displayName = portfolio?.name || "Guest";

  return (
    <HeroSection id="hero" bgImage={heroBg}>
      <HeroContainer className="hero">
        <div>
          <HeroTitle delay="1s">Hello, <HeroSpan delay="0.5s"></HeroSpan></HeroTitle>
          <HeroTitle delay="2s">This is <HeroSpan delay="1.5s"></HeroSpan></HeroTitle>
          <HeroTitle delay="3s">{displayName} <HeroSpan delay="2.5s"></HeroSpan></HeroTitle>
          <CtaButton href="#projects">Portfolio</CtaButton>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

export default Home;
