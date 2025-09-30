import React from "react";
import "./About.css";
import aboutImg from "../../assets/potos.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={aboutImg} alt="About" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>Mobile App/Web Developer (Frontend)</h2>
          <div className="about-description">
            <p>I am a passionate frontend developer with a strong background in Mobile app & Web development, specializing in <strong>Flutter</strong> and <strong>React Native</strong>. I have developed and deployed numerous mobile applications, successfully publishing them on both the <strong>Google Play Store</strong> and <strong>Apple App Store</strong>.</p>
            <p>My expertise lies in building high-performance, user-friendly, and scalable mobile applications that enhance user experience. In addition to mobile development, I have significant experience in web development using <strong>React.js</strong>, where I have built multiple projects with modern frontend frameworks.</p>
            <p>My skills extend to efficiently handling frontend architecture, optimizing performance, and integrating APIs to deliver seamless applications. I have also worked extensively on deployment processes, ensuring smooth production and development releases.</p>
          </div>

          <div className="skillset">
            <h2><strong>Key Skills & Technologies:</strong></h2>
            <ul>
              <li><strong>Mobile App Development:</strong> Flutter, React Native</li>
              <li><strong>Web Development:</strong> React js, JavaScript, HTML, CSS, Material UI</li>
              <li><strong>Version Control & CI/CD:</strong> Git, GitHub</li>
              <li><strong>State Management:</strong> Redux, Provider, Bloc , GetX</li>
              <li><strong>Deployments:</strong> Firebase, Vercel , Play Store & App Store</li>
            </ul>
          </div>

          <a href="https://flowcv.com/resume/n2w7km0a2i" target="_blank" rel="noopener noreferrer" id="downloadButton" className="cta">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
