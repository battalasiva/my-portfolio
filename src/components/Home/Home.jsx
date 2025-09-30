import React from "react";
import "./Home.css";
import heroBg from "../../assets/hero-bg.png";

const Home = () => {
  return (
    <section id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>This is <span></span></h1>
          <h1>Sivaram <span></span></h1>
          <a href="#projects" className="cta">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
