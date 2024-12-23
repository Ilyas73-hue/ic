import React, {useState, useEffect} from 'react';
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Contact() {

  const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 769px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(max-width: 769px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div id="contact">

      {/* Section 1 */}

        <section id="contact-section-1">
       <div id="contact-section-1-div-1">
          <motion.h6
           variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
        id="contact-section-1-div-1-h6-1">Contact</motion.h6>
          <motion.p
           variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          id="contact-section-1-div-1-p-1">Home > <span id="contact-section-1-div-1-p-1-span">Contact</span></motion.p>
       </div>
     </section>

       {/* Section 2 */}

       <section id="contact-section-2">
           <div className='container' id="contact-section-2-div-1">
              <div id="contact-section-2-div-1-1"> 
                <p id="contact-section-2-div-1-1-p-1">Contact</p>
              </div>
              <div id="contact-section-2-div-1-2">
                 <div id="contact-section-2-div-1-2-1">
                   <div id="contact-section-2-div-1-2-1-1">
                      <div id="contact-section-2-div-1-2-1-1-1">
                      <div id="contact-section-2-div-1-2-1-1-1-1">
                          <FaLocationDot id="contact-section-2-div-1-2-1-1-1-1-location" /> 
                      </div>
                      <div id="contact-section-2-div-1-2-1-1-1-2">
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-1">Location</p>
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-2">Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. Sed do eiusmod tempor .</p>
                      </div>
                      </div>
                      <div id="contact-section-2-div-1-2-1-1-1">
                      <div id="contact-section-2-div-1-2-1-1-1-1">
                          <FaPhoneAlt id="contact-section-2-div-1-2-1-1-1-1-location" /> 
                      </div>
                      <div id="contact-section-2-div-1-2-1-1-1-2">
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-1">Phone number</p>
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-2">+91 0000000000</p>
                      </div>
                      </div>
                      <div id="contact-section-2-div-1-2-1-1-1">
                      <div id="contact-section-2-div-1-2-1-1-1-1">
                          <MdEmail id="contact-section-2-div-1-2-1-1-1-1-location" /> 
                      </div>
                      <div id="contact-section-2-div-1-2-1-1-1-2">
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-1">Email</p>
                          <p id="contact-section-2-div-1-2-1-1-1-2-p-2">Iconnect124@gmail.com</p>
                      </div>
                      </div>
                   </div>
                 </div>
                 <div id="contact-section-2-div-1-2-2">
                      <div id="contact-section-2-div-1-2-2-1">
                         <p id="contact-section-2-div-1-2-2-1-p-1">Get In Touch</p>
                      </div>
                      <form id="contact-section-2-div-1-2-2-2-form">
                      <div id="contact-section-2-div-1-2-2-2">
                        <div id="contact-section-2-div-1-2-2-2-1">
                           <input id="contact-section-2-div-1-2-2-2-1-input-1" type="text" placeholder='Name' />
                        </div>
                        <div id="contact-section-2-div-1-2-2-2-1">
                           <input id="contact-section-2-div-1-2-2-2-1-input-2" type="email" placeholder='Email' />
                        </div>
                      </div> 
                      <div id="contact-section-2-div-1-2-2-3">
                       <input id="contact-section-2-div-1-2-2-3-input-1" type="number" placeholder='phone number' />
                      </div>
                      <div id="contact-section-2-div-1-2-2-4">
                        <textarea id="contact-section-2-div-1-2-2-4-text-area" type="message" placeholder='Write a message' ></textarea>
                      </div>
                      <div id="contact-section-2-div-1-2-2-5">
                          <button id="contact-section-2-div-1-2-2-5-button">Send Message</button>
                      </div>
                      </form>
                 </div>
              </div>
           </div>
       </section>

       {/* Section 3 */}

       <section id="contact-section-3">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8089282.34641553!2d72.30229422944826!3d8.117270359139912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0413f5fab23a9f%3A0xba58fb2ea1bb40ea!2sIntWhizz%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1734950345500!5m2!1sen!2sin" id="contact-section-3-gmap"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </section>

    </div>
  )
}

export default Contact
