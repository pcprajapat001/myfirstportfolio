import React, { useState } from "react";
// import "./Navbar.css"; // Import your CSS file for styling

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="social-icons">
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Nav;
