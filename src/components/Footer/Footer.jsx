import React from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FooterSection, FooterContainer, SocialIcon, SocialItem } from "./Footer.styles";

const Footer = () => {
  const { data: contact } = useSelector((state) => state.contact);

  const iconMap = {
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Twitter: FaTwitter,
  };

  const socialLinks = contact?.socialLinks?.filter(link => link.url) || [];

  return (
    <FooterSection id="footer">
      <FooterContainer className="footer">
        <h2>Your Complete Web Solution</h2>
        {socialLinks.length > 0 && (
          <SocialIcon className="social-icon">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.platform];
              return IconComponent ? (
                <SocialItem className="social-item" key={index}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <IconComponent />
                  </a>
                </SocialItem>
              ) : null;
            })}
          </SocialIcon>
        )}
        <p>Copyright © 2023 sivaram. All rights reserved</p>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
