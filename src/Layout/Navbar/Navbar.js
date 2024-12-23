import React from 'react';
import "./Navbar.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ic_logo from  "../../Assests/ic_logo.png";

function Navbar() {
  return (
    <div id="navbar">
      <div  id="navbar-section-1">
       <div className='container' id="navbar-section-1-div-1">
       <div id="navbar-section-1-div-1-1">
         <div id="navbar-section-1-div-1-1-1">
            <div id="navbar-section-1-div-1-1-1-1">
            <MdEmail id="navbar-section-1-div-1-1-1-1-email"  />
            </div>
            <div id="navbar-section-1-div-1-1-1-2">
            <p id="navbar-section-1-div-1-1-1-2-p-1">Iconnect123@gmail.com</p>
            </div>
         </div>
         <div id="navbar-section-1-div-1-1-2">
         <div id="navbar-section-1-div-1-1-2-1">
            <FaPhoneAlt id="navbar-section-1-div-1-1-2-1-phone"  />
            </div>
            <div id="navbar-section-1-div-1-1-2-2">
            <p id="navbar-section-1-div-1-1-2-2-p-1">00000 00000</p>
            </div>
         </div>
       </div>
       <div id="navbar-section-1-div-1-2">
          <div id="navbar-section-1-div-1-2">
            <FaTwitter id="navbar-section-1-div-1-2-twitter" />
          </div>
            <div id="navbar-section-1-div-1-2">
            <FaFacebookF id="navbar-section-1-div-1-2-facebook" />
          </div>
            <div id="navbar-section-1-div-1-2">
            <FaLinkedinIn id="navbar-section-1-div-1-2-linkedin" />
          </div>
            <div id="navbar-section-1-div-1-2">
            <FaInstagram id="navbar-section-1-div-1-2-instagram" />
          </div>
        </div>
       </div>
      </div>

      <nav class="navbar navbar-expand-lg" id="navbar-2">
  <div class="container">
    <a class="navbar-brand" href="#"><img id="nav-logo" src={ic_logo} alt={ic_logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/contact">Contact</a>
        </li>
      </ul>

      <div className='d-flex' id="d-flex">
      <button id="d-flex-get_start">Get Started</button>
      </div>


    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
