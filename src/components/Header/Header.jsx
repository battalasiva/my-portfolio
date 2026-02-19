import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaRobot } from "react-icons/fa";
import { HeaderSection, HeaderContainer, NavBar, Brand, NavList, Hamburger, Bar } from "./Header.styles";
import AIChat from "../AIChat/AIChat";

const Header = () => {
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const { data: portfolio } = useSelector((state) => state.portfolio);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    };

    const handleScroll = () => {
      if (window.scrollY > 250) {
        header.style.backgroundColor = "#29323c";
      } else {
        header.style.backgroundColor = "transparent";
      }
    };

    const handleMenuItemClick = () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", handleHamburgerClick);
    document.addEventListener("scroll", handleScroll);

    const menuItems = document.querySelectorAll(".nav-list ul li a");
    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuItemClick);
    });

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.removeEventListener("scroll", handleScroll);
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleMenuItemClick);
      });
    };
  }, []);

  const displayName = portfolio?.name || "Portfolio";
  const firstLetter = displayName.charAt(0);
  const restOfName = displayName.slice(1);

  return (
    <HeaderSection id="header">
      <HeaderContainer className="header" ref={headerRef}>
        <NavBar className="nav-bar">
          <Brand className="brand">
            <a href="#hero">
              <h1>
                <span>{firstLetter}</span>{restOfName}
              </h1>
            </a>
          </Brand>
          <NavList className="nav-list">
            <Hamburger className="hamburger" ref={hamburgerRef}>
              <Bar className="bar"></Bar>
            </Hamburger>
            <ul ref={mobileMenuRef}>
              <li>
                <a href="#hero" data-after="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" data-after="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#chat" 
                  data-after="AI Chat"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowChat(true);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <FaRobot /> AI Chat
                </a>
              </li>
            </ul>
          </NavList>
        </NavBar>
      </HeaderContainer>
      {showChat && <AIChat onClose={() => setShowChat(false)} />}
    </HeaderSection>
  );
};

export default Header;