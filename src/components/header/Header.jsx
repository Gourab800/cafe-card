import React from 'react'
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";

import './Header.css'

function Header() {
  return (
    <div className='navbar'>
        <a href="" className='logo'><img src={logo} alt="" /></a>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="" className='icon'><FaSearch /></a>

    </div>
  )
}

export default Header