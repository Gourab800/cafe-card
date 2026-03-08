import './Footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className='line'>

        <div class="list">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Mocha Coffee</a></li>
            <li><a href="#">Expresso Coffee</a></li>
            <li><a href="#">Lata Coffee</a></li>
            <li><a href="#">Milk Shake</a></li>
          </ul>
        </div>
        <div class="list">
          <h3>Category</h3>
          <ul>
            <li><a href="#">Men</a></li>
          </ul>
        </div>
        <div class="list">
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="list">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><FaSquareInstagram /></a></li>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaYoutube /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer