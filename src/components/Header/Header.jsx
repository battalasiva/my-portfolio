import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);

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

  return (
    <section id="header">
      <div className="header container" ref={headerRef}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>S</span>ivaram
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" ref={hamburgerRef}>
              <div className="bar"></div>
            </div>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;