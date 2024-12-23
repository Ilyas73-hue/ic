import React, {useState, useEffect} from 'react';
import "./About.css";
import png_1 from "../../Assests/website.png";
import png_2 from "../../Assests/software.png";
import png_3 from "../../Assests/branding.png";
import png_4 from "../../Assests/graphic.png";
import png_5 from "../../Assests/website.png";
import png_6 from "../../Assests/mobile.png";
import about from "../../Assests/about.png";
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import client_work from "../../Assests/client_review.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function About() {

  const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 769px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(max-width: 769px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const service_data =[{
        id: 1,
        name: "Software",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_1}`,
      }, {
        id: 2,
        name: "Digital marketing",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_2}`,
      }, {
        id: 3,
        name: "Branding",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_3}`,
      }, 
      {
        id: 4,
        name: "Graphics design",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_4}`,
      },
      {
        id: 5,
        name: "Website",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_5}`,
      }, {
        id: 6,
        name: "Domains",
        descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: `${png_6}`,
      }
    ];
    
 
    
    const client_review =[{
      id: 1,
      name: "James Anderson",
      role: "Analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labor.",
      img: `${client_work}`
    }, {
      id: 2,
      name: "James Anderson",
      role: "Analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labor.",
      img: `${client_work}`
    }, {
      id: 3,
      name: "James Anderson",
      role: "Analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labor.",
      img: `${client_work}`
    }, {
      id: 4,
      name: "James Anderson",
      role: "Analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labor.",
      img: `${client_work}`
    }]

  return (
    <div id="about">
      {/* section 1 */}

     <section id="about-section-1">
       <div id="about-section-1-div-1">
          <motion.h6
           variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="about-section-1-div-1-h6-1">About Us</motion.h6>
          <motion.p
           variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="about-section-1-div-1-p-1">Home > <span id="about-section-1-div-1-p-1-span">About Us</span></motion.p>
       </div>
     </section>

     {/* Section 2 */}

     

<section id="about-section-2">
   <div className='container' id="about-section-2-div-1">
    {service_data.map((item) => (
    <motion.div
     variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
    id="about-section-2-div-1-1">
        <div id="about-section-2-div-1-1-1">
          <img id="about-section-2-div-1-1-1-img" src={item.img} alt={item.img} />
        </div>
        <div id="about-section-2-div-1-1-2">
         <p id="about-section-2-div-1-1-2-p-1">{item.name}</p>
        </div>
     </motion.div>
    ))}
     
   </div>
</section>

{/* Section 3 */}

<section id="about-section-3">
   <div className='container' id="about-section-3-div-1">
   <motion.div
    variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
   id="about-section-3-div-1-1">
    <div id="about-section-3-div-1-1-1">
     <p id="about-section-3-div-1-1-1-p-1">About Us</p>
    </div>
    <div id="about-section-3-div-1-1-2">
     <h6 id="about-section-3-div-1-1-2-h6-1">Welcome to Iconnect Technology</h6>
     <div id="about-section-3-div-1-1-2-line">

     </div>
    </div>
    <div id="about-section-3-div-1-1-3">
     <p id="about-section-3-div-1-1-3-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="about-section-3-div-1-1-4">
    <div id="about-section-3-div-1-1-4-div-1"> 
     <div id="about-section-3-div-1-1-4-div-1-1">
      <TiTick id="about-section-3-div-1-1-4-div-1-1-tick" />
     </div>
     <div id="about-section-3-div-1-1-4-div-1-2">
       <p id="about-section-3-div-1-1-4-div-1-2-p-1">Best Successfully Company With Satisfied All Of Our Customers</p>
     </div>
    </div>
    <div id="about-section-3-div-1-1-4-div-1"> 
     <div id="about-section-3-div-1-1-4-div-1-1">
      <TiTick id="about-section-3-div-1-1-4-div-1-1-tick" />
     </div>
     <div id="about-section-3-div-1-1-4-div-1-2">
       <p id="about-section-3-div-1-1-4-div-1-2-p-1">Digital content marketing platform</p>
     </div>
    </div>
    </div>
    <div id="about-section-3-div-1-1-5">
     <button id="about-section-3-div-1-1-5-button">
      Read More
     </button>
    </div>
   </motion.div>
   <motion.div
    variants={!matches && fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
   id="about-section-3-div-1-2">
    <img id="about-section-3-div-1-2-img-1" src={about} alt={about} />
   </motion.div>
   </div>
</section> 

{/* Section 4 */}

  <section id="about-section-4">
    <div className='container' id="about-section-4-div-1">
     <motion.div
      variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
     id="about-section-4-div-1-1">
      <p id="about-section-4-div-1-1-p-1">Clients Review</p>
     </motion.div>
     <motion.div
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
     id="about-section-4-div-1-2">
      <p id="about-section-4-div-1-2-p-1">What Our Customers Say</p>
     </motion.div>
     <div id="about-section-4-div-1-3">
      {
        client_review.map((item) => (
          <motion.div
           variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="about-section-4-div-1-3-1">
          <div id="about-section-4-div-1-3-1-star">
           <FaStar id="about-section-4-div-1-3-1-star-ico"  />
           <FaStar id="about-section-4-div-1-3-1-star-ico" />
           <FaStar id="about-section-4-div-1-3-1-star-ico" />
           <FaStar id="about-section-4-div-1-3-1-star-ico" />
           <FaStar id="about-section-4-div-1-3-1-star-ico" />
          </div>
          <div id="about-section-4-div-1-3-2">
            <p id="about-section-4-div-1-3-2-p-1">{item.description}</p>
        </div>
  
        <div id="about-section-4-div-1-3-3">
           <img src={item.img} alt={item.img} /> 
        </div>
  
        <div id="about-section-4-div-1-3-4">
           <p id="about-section-4-div-1-3-4-p-1">{item.name}</p>
        </div>
  
        <div id="about-section-4-div-1-3-5">
           <p id="about-section-4-div-1-3-5-p-1">{item.role}</p>
        </div>
  
        </motion.div>
        ))
      }

    
     </div>
    </div>
  </section>

    {/* Section 8 */}

  <section id="home-section-8">
     <div className='container' id="home-section-8-div-1">
      <motion.p
       variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
      id="home-section-8-div-1-p-1">Lets Create Your Project</motion.p>
      <motion.button
       variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
      id="home-section-8-div-1-button">Contact us</motion.button>
     </div>
  </section>

    </div>
  )
}

export default About
