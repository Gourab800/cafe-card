import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <a href="" className='logo'><img src={logo} alt="" /></a>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="#" onClick={() => setIsOpen(false)}>Blog</a></li>
        <li><a href="#" onClick={() => setIsOpen(false)}>Media</a></li>
        <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>


      {/* Hamburger Button */}
      <button className='burger' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  )
}

export default Navbar