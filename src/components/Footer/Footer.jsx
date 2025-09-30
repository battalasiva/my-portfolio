import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/battala-sivaram-53a78923a",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png",
    },
    {
      url: "https://github.com/battalasiva",
      icon: "https://cdn.icon-icons.com/icons2/790/PNG/512/github_icon-icons.com_65450.png",
    },
    {
      url: "https://twitter.com/siva__rockzzz_",
      icon: "https://assets.stickpng.com/images/5a2fe3efcc45e43754640848.png",
    },
  ];

  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
        </div>
        <h2>Your Complete Web Solution</h2>
        <div className="social-icon">
          {socialLinks.map((social, index) => (
            <div className="social-item" key={index}>
              <a href={social.url}>
                <img src={social.icon} alt="social-icon" />
              </a>
            </div>
          ))}
        </div>
        <p>Copyright © 2023 sivaram. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
