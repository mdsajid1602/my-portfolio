import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "Services", "About", "Contact", "Gallery"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">MD SAJID</div>

        {/* Desktop Menu */}
        
        <ul className="nav-links desktop-menu">

        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>Experience</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>TechStack</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>


        
          
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="nav-links mobile-menu">
         <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>Experience</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>TechStack</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>

        </ul>
      )}
    </nav>
  );
}
