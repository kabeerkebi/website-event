import React from 'react'
import "../assets/styles/nav.css";
import {  FaSearch, FaBars } from 'react-icons/fa'; 


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-logo">
        <h2>.EVENT MANAGER</h2>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Sites</a></li>
          <li><a href="#">Links</a></li>
          <li><a href="#">Filter</a></li>
        </ul>
      </div>
      <div className="navbar-menu">
        <FaBars />
      </div>
    </nav>
    </div>
  )
}

export default Navbar
