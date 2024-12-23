import React, {useState, useEffect} from 'react';
import "./Portfolio.css";
import portfolio_img_1 from "../../Assests/Portfolio_img_1.png";
import portfolio_img_2 from "../../Assests/Portfolio_img_2.png";
import portfolio_img_3 from "../../Assests/Portfolio_img_3.png";
import portfolio_img_4 from "../../Assests/Portfolio_img_4.png";
import portfolio_img_5 from "../../Assests/Portfolio_img_5.png";
import portfolio_img_6 from "../../Assests/Portfolio_img_6.png";
import portfolio_img_7 from "../../Assests/Portfolio_img_7.png";
import portfolio_img_8 from "../../Assests/Portfolio_img_8.png";
import client_work from "../../Assests/client_review.png";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function Portfolio() {

    const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 769px)").matches
    )
  
    useEffect(() => {
      window
      .matchMedia("(max-width: 769px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

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
    <div id="portfolio">
         {/* Section 1 */}

         <section id="portfolio-section-1">
       <div id="portfolio-section-1-div-1">
          <motion.h6
          variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="portfolio-section-1-div-1-h6-1">Portfolio</motion.h6>
          <motion.p
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="portfolio-section-1-div-1-p-1">Home > <span id="portfolio-section-1-div-1-p-1-span">Portfolio</span></motion.p>
       </div>
     </section>

     {/* Section 2 */}

     <section  id="portfolio-section-2">
        <div className='container'  id="portfolio-section-2-div-1"> 
          <motion.div
          variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="portfolio-section-2-div-1-1">
              <p id="portfolio-section-2-div-1-1-p-1">Latest Projects</p>
          </motion.div>
          <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="portfolio-section-2-div-1-2">
             <p id="portfolio-section-2-div-1-2-p-1">Check out our latest project</p>
          </motion.div>
          <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.7 }}
          id="portfolio-section-2-div-1-3">
             <div id="portfolio-section-2-div-1-3-1">
                 <p id="portfolio-section-2-div-1-3-1-p-1">All works</p>
             </div>
             <div id="portfolio-section-2-div-1-3-2">
             <p id="portfolio-section-2-div-1-3-2-p-1"> Branding </p>
             </div>
             <div id="portfolio-section-2-div-1-3-3">
             <p id="portfolio-section-2-div-1-3-3-p-1"> Software </p>
             </div>
             <div id="portfolio-section-2-div-1-3-4">
             <p id="portfolio-section-2-div-1-3-4-p-1"> web design </p>
             </div>
          </motion.div>

    <div id="portfolio-section-2-div-1-4">
      <div id="portfolio-section-2-div-1-4-1">
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
      id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_1} alt={portfolio_img_1} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_2} alt={portfolio_img_2} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_3} alt={portfolio_img_3} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_4} alt={portfolio_img_4} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_5} alt={portfolio_img_5} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_6} alt={portfolio_img_6} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_7} alt={portfolio_img_7} />
      <motion.img
      variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }} id="portfolio-section-2-div-1-4-1-img" src={portfolio_img_8} alt={portfolio_img_8} />
      </div>
    </div>
        </div>
     </section>

     
     {/* Section 3 */}
     
       <section id="portfolio-section-3">
         <div className='container' id="portfolio-section-3-div-1">
          <motion.div
           variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }} 
          id="portfolio-section-3-div-1-1">
           <p id="portfolio-section-3-div-1-1-p-1">Clients Review</p>
          </motion.div>
          <motion.div
           variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }} 
          id="portfolio-section-3-div-1-2">
           <p id="portfolio-section-3-div-1-2-p-1">What Our Customers Say</p>
          </motion.div>
          <div id="portfolio-section-3-div-1-3">
           {
             client_review.map((item) => (
               <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }} 
               id="portfolio-section-3-div-1-3-1">
               <div id="portfolio-section-3-div-1-3-1-star">
                <FaStar id="portfolio-section-3-div-1-3-1-star-ico"  />
                <FaStar id="portfolio-section-3-div-1-3-1-star-ico" />
                <FaStar id="portfolio-section-3-div-1-3-1-star-ico" />
                <FaStar id="portfolio-section-3-div-1-3-1-star-ico" />
                <FaStar id="portfolio-section-3-div-1-3-1-star-ico" />
               </div>
               <div id="portfolio-section-3-div-1-3-2">
                 <p id="portfolio-section-3-div-1-3-2-p-1">{item.description}</p>
             </div>
       
             <div id="portfolio-section-3-div-1-3-3">
                <img src={item.img} alt={item.img} /> 
             </div>
       
             <div id="portfolio-section-3-div-1-3-4">
                <p id="portfolio-section-3-div-1-3-4-p-1">{item.name}</p>
             </div>
       
             <div id="portfolio-section-3-div-1-3-5">
                <p id="portfolio-section-3-div-1-3-5-p-1">{item.role}</p>
             </div>
       
             </motion.div>
             ))
           }
     
         
          </div>
         </div>
       </section>
     
         {/* Section 4 */}
         
       <section id="portfolio-section-4">
          <div className='container' id="portfolio-section-4-div-1">
           <motion.p
            variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} 
           id="portfolio-section-4-div-1-p-1">Lets Create Your Project</motion.p>
           <motion.button
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} 
           id="portfolio-section-4-div-1-button">Contact us</motion.button>
          </div>
       </section>

    </div>
  )
}

export default Portfolio;
