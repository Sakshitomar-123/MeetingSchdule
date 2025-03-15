import React from "react";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-text"><img src={logo}/></span>
        </div>
       
      </div>
      <nav className="navbar">
        <select className="explore-dropdown">
          <option>Explore Courses</option>
        </select>
        <div className="nav-links">
          <span>TEST SERIES</span>
          <span>EXAMS</span>
          <span className="publication">PUBLICATION</span>
        </div>
        <button className="login-btn">LOGIN / SIGNUP</button>
      </nav>
    </header>
  );
};
export default Header;
