import React from 'react';
import "./Footer.css";
import footer_logo from "../../Assests/ic_footer_logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function Footer() {
  return (
    <div id="footer">
        {/* Section 1 */}
        <section className='container' id="footer-section-1">
            {/* Part 1 */}
          <div id="footer-section-1-div-1">
            <div id="footer-section-1-div-1-1">
              <img id="footer-section-1-div-1-1-img-1" src={footer_logo} alt={footer_logo} />
            </div>
            <div id="footer-section-1-div-1-2">
             <p id="footer-section-1-div-1-2-p-1">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             </p>
            </div>
          </div>
         {/* Part 2 */}

          <div id="footer-section-1-div-2">
            <div id="footer-section-1-div-2-1">
               <p id="footer-section-1-div-2-1-p-1">Page Links</p>
            </div>
            <div id="footer-section-1-div-2-2">
             <ul id="footer-section-1-div-2-2-ul">
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-a" href="/">Home</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-a" href="/about">About Us</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-a" href="/service">Services</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-a" href="/">Career</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-a" href="/">Contact</a></li>
             </ul>
            </div>
          </div>

          {/* Part 3 */}

          <div id="footer-section-1-div-3">
            <div id="footer-section-1-div-3-1">
               <p id="footer-section-1-div-3-1-p-1">Services</p>
            </div>
            <div id="footer-section-1-div-3-2">
             <ul id="footer-section-1-div-3-2-ul">
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Software</a></li>
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Digital Marketing</a></li>
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Branding</a></li>
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Graphic Design</a></li>
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Website Design</a></li>
                <li id="footer-section-1-div-3-2-li"><a id="footer-section-1-div-2-2-a" href="/">Domains</a></li>
             </ul>
            </div>
          </div>

          {/* Part 4 */}

          <div id="footer-section-1-div-4">
           <div id="footer-section-1-div-4-1">
            <div id="footer-section-1-div-4-1-1">
             <p id="footer-section-1-div-4-1-1-p-1">Contact</p>
            </div>
            <div id="footer-section-1-div-4-1-2">
            <div id="footer-section-1-div-4-1-2-location">
              <div id="footer-section-1-div-4-1-2-location-1">
                <IoLocationSharp id="footer-section-1-div-4-1-2-location-1"  />
              </div>
              <div id="footer-section-1-div-4-1-2-location-2">
                <p id="footer-section-1-div-4-1-2-location-2-p-1">Lorem ipsum dolor sit amet, consectetur  </p>
              </div>
            </div>
            <div id="footer-section-1-div-4-1-2-email">
              <div id="footer-section-1-div-4-1-2-email-1">
                <MdEmail id="footer-section-1-div-4-1-2-email-1"  />
              </div>
              <div id="footer-section-1-div-4-1-2-email-2">
                <p id="footer-section-1-div-4-1-2-email-2-p-1">Iconnect123@gmail.com</p>
              </div>
            </div>  

            <div id="footer-section-1-div-4-1-2-phone">
              <div id="footer-section-1-div-4-1-2-phone-1">
                <FaPhoneAlt id="footer-section-1-div-4-1-2-phone-1"  />
              </div>
              <div id="footer-section-1-div-4-1-2-phone-2">
                <p id="footer-section-1-div-4-1-2-phone-2-p-1">+91 0000000000</p>
              </div>
            </div>  
            </div>
           </div>
           <div id="footer-section-1-div-4-2">
              <div id="footer-section-1-div-4-2-1">
              <p id="footer-section-1-div-4-2-1-p-1">Follow Us</p>
              </div>
              <div id="footer-section-1-div-4-2-2">
               <div id="footer-section-1-div-4-2-2-1">
                 <FaFacebookF id="footer-section-1-div-4-2-2-1-facebook" />
               </div>
               <div id="footer-section-1-div-4-2-2-2">
               <FaInstagram id="footer-section-1-div-4-2-2-2-instagram" />
               </div>
               <div id="footer-section-1-div-4-2-2-3">
               <FaLinkedinIn id="footer-section-1-div-4-2-2-3-linkedin" />
               </div>
               <div id="footer-section-1-div-4-2-2-4">
                <FaTwitter id="footer-section-1-div-4-2-2-4-twitter" />
               </div>
              </div>
           </div>
          </div>
        </section>

{/* Section 2 */}

<section id="footer-section-2">
      
</section>

{/* Section 3 */}

<section id="footer-section-3">
   <div className='container' id='footer-section-3-div-1'>
    <div id="footer-section-3-div-1-1">
      <p id="footer-section-3-div-1-1-p-1">© Copyright 2024 Iconnect Technology. All Rights Reserved.</p>
    </div>
    <div id="footer-section-3-div-1-2">
      <p id="footer-section-3-div-1-2-p-1">Design by : Iconnect Technology</p>
    </div>
   </div>
</section>

    </div>
  )
}

export default Footer
