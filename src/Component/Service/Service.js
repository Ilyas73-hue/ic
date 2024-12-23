import React, {useState, useEffect} from 'react';
import "./Service.css";
import png_1 from "../../Assests/website.png";
import png_2 from "../../Assests/software.png";
import png_3 from "../../Assests/branding.png";
import png_4 from "../../Assests/graphic.png";
import png_5 from "../../Assests/website.png";
import png_6 from "../../Assests/mobile.png";
import service from "../../Assests/about.png";
import png__black_1 from "../../Assests/website_black.png";
import png__black_2 from "../../Assests/software_black.png";
import png__black_3 from "../../Assests/branding_black.png";
import png__black_4 from "../../Assests/graphic_black.png";
import png__black_5 from "../../Assests/website_black.png";
import png__black_6 from "../../Assests/mobile_black.png";
import { IoIosArrowForward } from "react-icons/io";
import why_1 from "../../Assests/why_1.png";
import why_2 from "../../Assests/why_2.png";
import why_3 from "../../Assests/why_3.png";
import why_4 from "../../Assests/why_4.png";
import happy from "../../Assests/happy_clients.png";
import project_completed from "../../Assests/project_completed.png";
import project_deliverd from "../../Assests/project_delivered.png";
import { FaStar } from "react-icons/fa";
import client_work from "../../Assests/client_review.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Service() {

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
    
    const service_data_1 =[{
      id: 1,
      name: "Software",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_1}`,
    }, {
      id: 2,
      name: "Digital marketing",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_2}`,
    }, {
      id: 3,
      name: "Branding",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_3}`,
    }, 
    {
      id: 4,
      name: "Graphics design",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_4}`,
    },
    {
      id: 5,
      name: "Website",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_5}`,
    }, {
      id: 6,
      name: "Domains",
      descrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: `${png__black_6}`,
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
    <div id="service">
        {/* section 1 */}
        
     <section id="service-section-1">
       <div id="service-section-1-div-1">
          <motion.h6
            variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-1-div-1-h6-1">Services</motion.h6>
          <motion.p
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-1-div-1-p-1">Home > <span id="service-section-1-div-1-p-1-span">Services</span></motion.p>
       </div>
     </section>

{/* Section 2 */}

<section id="service-section-2">
   <div className='container' id="service-section-2-div-1">
    {service_data.map((item) => (
    <motion.div
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
    id="service-section-2-div-1-1">
        <div id="service-section-2-div-1-1-1">
          <img id="service-section-2-div-1-1-1-img" src={item.img} alt={item.img} />
        </div>
        <div id="service-section-2-div-1-1-2">
         <p id="service-section-2-div-1-1-2-p-1">{item.name}</p>
        </div>
     </motion.div>
    ))}
     
   </div>
</section>

{/* Section 3 */}


<section id="service-section-3">
   <div className='container' id="service-section-3-div-1">
       <motion.div
         variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}id="service-section-3-div-1-1">
         <p id="service-section-3-div-1-1-p-1">Service</p>
       </motion.div>
       <motion.div
         variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
       id="service-section-3-div-1-2">
        <p id="service-section-3-div-1-2-p-1">We provide Awesome Service</p>
       </motion.div>
       <div id="service-section-3-div-1-3">
        {
          service_data_1.map((item) => (
            <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            id="service-section-3-div-1-3-1">
            <div id="service-section-3-div-1-3-1-1">
            <img id="service-section-3-div-1-3-1-1-img-1" src={item.img} alt={item.img} />
            </div>
  
            <div id="service-section-3-div-1-3-1-2">
              <p id="service-section-3-div-1-3-1-2-p-1">{item.name}</p>
            </div>
  
            <div id="service-section-3-div-1-3-1-3">
              <p id="service-section-3-div-1-3-1-3-p-1">{item.descrption}</p>
            </div>
  
            <div id="service-section-3-div-1-3-1-4">
              <IoIosArrowForward id="service-section-3-div-1-3-1-4-arrow" />
            </div>
          
          </motion.div>
          ))
        }
     
       </div>
   </div>
</section>

{/* Section 4 */}

<section id="service-section-4">
     <div className='container' id="service-section-4-div-1" >
      <motion.div
        variants={!matches && fadeBigIn("right")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
      id="service-section-4-div-1-1">
       <img id="service-section-4-div-1-1-img" src={service} alt={service} />
      </motion.div>
      <div id="service-section-4-div-1-2">
         <motion.div
           variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
         id="service-section-4-div-1-2-1">
           <p id="service-section-4-div-1-2-1-p-1">Why Choose Us</p>
         </motion.div>
         <motion.div
           variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
         id="service-section-4-div-1-2-2">
           <p id="service-section-4-div-1-2-2-p-1">With over 10 years of experience in IT services, I have specialized in developing software applications and branding for clients worldwide.</p>
         </motion.div>

         <div id="service-section-4-div-1-2-3">
          <motion.div
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-4-div-1-2-3-1">
          <div id="service-section-4-div-1-2-3-1-1">
            <img src={why_1} alt={why_1} />
           </div>
           <div id="service-section-4-div-1-2-3-1-1">
             <p id="service-section-4-div-1-2-3-1-1-p-1">Latest technologies</p>
             <p id="service-section-4-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </motion.div> 
          <motion.div
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-4-div-1-2-3-1">
          <div id="service-section-4-div-1-2-3-1-1">
            <img src={why_2} alt={why_2} />
           </div>
           <div id="service-section-4-div-1-2-3-1-1">
             <p id="service-section-4-div-1-2-3-1-1-p-1">Unique solutions</p>
             <p id="service-section-4-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </motion.div>
          <motion.div
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-4-div-1-2-3-1">
          <div id="service-section-4-div-1-2-3-1-1">
            <img src={why_3} alt={why_3} />
           </div>
           <div id="service-section-4-div-1-2-3-1-1">
             <p id="service-section-4-div-1-2-3-1-1-p-1">Experience</p>
             <p id="service-section-4-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </motion.div>
          <motion.div
            variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
          id="service-section-4-div-1-2-3-1">
          <div id="service-section-4-div-1-2-3-1-1">
            <img src={why_4} alt={why_4} />
           </div>
           <div id="service-section-4-div-1-2-3-1-1">
             <p id="service-section-4-div-1-2-3-1-1-p-1">Support</p>
             <p id="service-section-4-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </motion.div>
         </div>
         

      </div>
     </div>
</section>

{/* Section 5 */}

<section id="service-section-5">
   <motion.div
     variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
   className='container' id="service-section-5-div-1">
    <div id="service-section-5-div-1-div-1">
     <div id="service-section-5-div-1-1">
      <img id="service-section-5-div-1-1-img" src={happy} alt={happy} />
     </div>
     <div id="service-section-5-div-1-2">
      <p id="service-section-5-div-1-2-p-1">200+ </p>
      <p id="service-section-5-div-1-2-p-2">happy clients</p>
    </div>
    </div>
    <div id="service-section-5-div-1-div-1">
     <div id="service-section-5-div-1-1">
      <img id="service-section-5-div-1-1-img" src={project_completed} alt={project_completed} />
     </div>
     <div id="service-section-5-div-1-2">
      <p id="service-section-5-div-1-2-p-1">100+ </p>
      <p id="service-section-5-div-1-2-p-2">project Completed</p>
    </div>
    </div>
    <div id="service-section-5-div-1-div-1">
     <div id="service-section-5-div-1-1">
      <img id="service-section-5-div-1-1-img" src={project_deliverd} alt={project_deliverd} />
     </div>
     <div id="service-section-5-div-1-2">
      <p id="service-section-5-div-1-2-p-1">96 projects </p>
      <p id="service-section-5-div-1-2-p-2">Deliver Result</p>
    </div>
    </div>
   </motion.div>
</section>

  {/* Section 6 */}
  

  <section id="service-section-6">
    <div className='container' id="service-section-6-div-1">
     <motion.div
       variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
     id="service-section-6-div-1-1">
      <p id="service-section-6-div-1-1-p-1">Clients Review</p>
     </motion.div>
     <motion.div
       variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
     id="service-section-6-div-1-2">
      <p id="service-section-6-div-1-2-p-1">What Our Customers Say</p>
     </motion.div>
     <div id="service-section-6-div-1-3">
      {
        client_review.map((item) => (
          <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
           id="service-section-6-div-1-3-1">
          <div id="service-section-6-div-1-3-1-star">
           <FaStar id="service-section-6-div-1-3-1-star-ico"  />
           <FaStar id="service-section-6-div-1-3-1-star-ico" />
           <FaStar id="service-section-6-div-1-3-1-star-ico" />
           <FaStar id="service-section-6-div-1-3-1-star-ico" />
           <FaStar id="service-section-6-div-1-3-1-star-ico" />
          </div>
          <div id="service-section-6-div-1-3-2">
            <p id="service-section-6-div-1-3-2-p-1">{item.description}</p>
        </div>
  
        <div id="service-section-6-div-1-3-3">
           <img src={item.img} alt={item.img} /> 
        </div>
  
        <div id="service-section-6-div-1-3-4">
           <p id="service-section-6-div-1-3-4-p-1">{item.name}</p>
        </div>
  
        <div id="service-section-6-div-1-3-5">
           <p id="service-section-6-div-1-3-5-p-1">{item.role}</p>
        </div>
  
        </motion.div>
        ))
      }

    
     </div>
    </div>
  </section>

    {/* Section 7 */}
    
  <section id="service-section-7">
     <div className='container' id="service-section-7-div-1">
      <motion.p
        variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
      id="service-section-7-div-1-p-1">Lets Create Your Project</motion.p>
      <motion.button
       variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      id="service-section-7-div-1-button">Contact us</motion.button>
     </div>
  </section>

    </div>
  )
}

export default Service
