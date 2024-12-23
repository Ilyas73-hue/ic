import React from 'react';
import "./Home.css";
import home_carousel_img_1 from "../../Assests/home_ic_bg_1.jpeg";
import home_carousel_img_2 from "../../Assests/home_ic_bg_2.jpeg";
import home_carousel_img_3 from "../../Assests/home_ic_bg_3.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import png_1 from "../../Assests/website.png";
import png_2 from "../../Assests/software.png";
import png_3 from "../../Assests/branding.png";
import png_4 from "../../Assests/graphic.png";
import png_5 from "../../Assests/website.png";
import png_6 from "../../Assests/mobile.png";
import about from "../../Assests/about.png";
import { TiTick } from "react-icons/ti";
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




function Home() {

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
    <div id="home">
        {/* Section 1 */}

        <section id="home-section-1">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div id="carousel-image">
    <div class="carousel-item active">
      <img src={home_carousel_img_1} class="d-block w-100" id="d-block" alt={home_carousel_img_1} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_2} class="d-block w-100" id="d-block" alt={home_carousel_img_2} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_3} class="d-block w-100" id="d-block" alt={home_carousel_img_3} />
    </div>
    </div>
    <div id="carousel-content">
        <div id="carousel-content-1">
          <div className='container' id="carousel-content-1-div-1">
          <p id="carousel-content-1-div-1-p-1">Welcome to Iconnect Technology</p>
          <div id="carousel-content-1-div-1-line">

          </div>
          </div>
          <div className='container' id="carousel-content-1-div-2">
           <h6 id="carousel-content-1-div-2-h6-1">Innovative Software Solutions to Transform Your Business</h6>
          </div>
          <div className='container' id="carousel-content-1-div-3">
           <p id="carousel-content-1-div-3-p-1">We build powerful, scalable, and intuitive software that streamlines operations and accelerates growth.</p>
          </div>
          <div className='container' id="carousel-content-1-div-3">
            <button id="carousel-content-1-div-3-button">More Details</button>
          </div>
        </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <FaLongArrowAltLeft id="carousel-arrow" />
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <FaLongArrowAltRight id="carousel-arrow"  />
  </button>
</div>
        </section>

{/* Section 2 */}

<section id="home-section-2">
   <div className='container' id="home-section-2-div-1">
    {service_data.map((item) => (
    <div id="home-section-2-div-1-1">
        <div id="home-section-2-div-1-1-1">
          <img id="home-section-2-div-1-1-1-img" src={item.img} alt={item.img} />
        </div>
        <div id="home-section-2-div-1-1-2">
         <p id="home-section-2-div-1-1-2-p-1">{item.name}</p>
        </div>
     </div>
    ))}
     
   </div>
</section>

{/* Section 3 */}

<section id="home-section-3">
   <div className='container' id="home-section-3-div-1">
   <div id="home-section-3-div-1-1">
    <div id="home-section-3-div-1-1-1">
     <p id="home-section-3-div-1-1-1-p-1">About Us</p>
    </div>
    <div id="home-section-3-div-1-1-2">
     <h6 id="home-section-3-div-1-1-2-h6-1">Welcome to Iconnect Technology</h6>
     <div id="home-section-3-div-1-1-2-line">

     </div>
    </div>
    <div id="home-section-3-div-1-1-3">
     <p id="home-section-3-div-1-1-3-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="home-section-3-div-1-1-4">
    <div id="home-section-3-div-1-1-4-div-1"> 
     <div id="home-section-3-div-1-1-4-div-1-1">
      <TiTick id="home-section-3-div-1-1-4-div-1-1-tick" />
     </div>
     <div id="home-section-3-div-1-1-4-div-1-2">
       <p id="home-section-3-div-1-1-4-div-1-2-p-1">Best Successfully Company With Satisfied All Of Our Customers</p>
     </div>
    </div>
    <div id="home-section-3-div-1-1-4-div-1"> 
     <div id="home-section-3-div-1-1-4-div-1-1">
      <TiTick id="home-section-3-div-1-1-4-div-1-1-tick" />
     </div>
     <div id="home-section-3-div-1-1-4-div-1-2">
       <p id="home-section-3-div-1-1-4-div-1-2-p-1">Digital content marketing platform</p>
     </div>
    </div>
    </div>
    <div id="home-section-3-div-1-1-5">
     <button id="home-section-3-div-1-1-5-button">
      Read More
     </button>
    </div>
   </div>
   <div id="home-section-3-div-1-2">
    <img id="home-section-3-div-1-2-img-1" src={about} alt={about} />
   </div>
   </div>
</section> 

{/* Section 4 */}

<section id="home-section-4">
   <div className='container' id="home-section-4-div-1">
       <div id="home-section-4-div-1-1">
         <p id="home-section-4-div-1-1-p-1">Service</p>
       </div>
       <div id="home-section-4-div-1-2">
        <p id="home-section-4-div-1-2-p-1">We provide Awesome Service</p>
       </div>
       <div id="home-section-4-div-1-3">
        {
          service_data_1.map((item) => (
            <div id="home-section-4-div-1-3-1">
            <div id="home-section-4-div-1-3-1-1">
            <img id="home-section-4-div-1-3-1-1-img-1" src={item.img} alt={item.img} />
            </div>
  
            <div id="home-section-4-div-1-3-1-2">
              <p id="home-section-4-div-1-3-1-2-p-1">{item.name}</p>
            </div>
  
            <div id="home-section-4-div-1-3-1-3">
              <p id="home-section-4-div-1-3-1-3-p-1">{item.descrption}</p>
            </div>
  
            <div id="home-section-4-div-1-3-1-4">
              <IoIosArrowForward id="home-section-4-div-1-3-1-4-arrow" />
            </div>
          
          </div>
          ))
        }
     
       </div>
   </div>
</section>

{/* Section 5 */}

<section id="home-section-5">
     <div className='container' id="home-section-5-div-1" >
      <div id="home-section-5-div-1-1">
       <img id="home-section-5-div-1-1-img" src={about} alt={about} />
      </div>
      <div id="home-section-5-div-1-2">
         <div id="home-section-5-div-1-2-1">
           <p id="home-section-5-div-1-2-1-p-1">Why Choose Us</p>
         </div>
         <div id="home-section-5-div-1-2-2">
           <p id="home-section-5-div-1-2-2-p-1">With over 10 years of experience in IT services, I have specialized in developing software applications and branding for clients worldwide.</p>
         </div>

         <div id="home-section-5-div-1-2-3">
          <div id="home-section-5-div-1-2-3-1">
          <div id="home-section-5-div-1-2-3-1-1">
            <img src={why_1} alt={why_1} />
           </div>
           <div id="home-section-5-div-1-2-3-1-1">
             <p id="home-section-5-div-1-2-3-1-1-p-1">Latest technologies</p>
             <p id="home-section-5-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </div> 
          <div id="home-section-5-div-1-2-3-1">
          <div id="home-section-5-div-1-2-3-1-1">
            <img src={why_2} alt={why_2} />
           </div>
           <div id="home-section-5-div-1-2-3-1-1">
             <p id="home-section-5-div-1-2-3-1-1-p-1">Unique solutions</p>
             <p id="home-section-5-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </div>
          <div id="home-section-5-div-1-2-3-1">
          <div id="home-section-5-div-1-2-3-1-1">
            <img src={why_3} alt={why_3} />
           </div>
           <div id="home-section-5-div-1-2-3-1-1">
             <p id="home-section-5-div-1-2-3-1-1-p-1">Experience</p>
             <p id="home-section-5-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </div>
          <div id="home-section-5-div-1-2-3-1">
          <div id="home-section-5-div-1-2-3-1-1">
            <img src={why_4} alt={why_4} />
           </div>
           <div id="home-section-5-div-1-2-3-1-1">
             <p id="home-section-5-div-1-2-3-1-1-p-1">Support</p>
             <p id="home-section-5-div-1-2-3-1-1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem,</p>
           </div>
          </div>
         </div>
         

      </div>
     </div>
</section>

{/* Section 6 */}

<section id="home-section-6">
   <div className='container' id="home-section-6-div-1">
    <div id="home-section-6-div-1-div-1">
     <div id="home-section-6-div-1-1">
      <img id="home-section-6-div-1-1-img" src={happy} alt={happy} />
     </div>
     <div id="home-section-6-div-1-2">
      <p id="home-section-6-div-1-2-p-1">200+ </p>
      <p id="home-section-6-div-1-2-p-2">happy clients</p>
    </div>
    </div>
    <div id="home-section-6-div-1-div-1">
     <div id="home-section-6-div-1-1">
      <img id="home-section-6-div-1-1-img" src={project_completed} alt={project_completed} />
     </div>
     <div id="home-section-6-div-1-2">
      <p id="home-section-6-div-1-2-p-1">100+ </p>
      <p id="home-section-6-div-1-2-p-2">project Completed</p>
    </div>
    </div>
    <div id="home-section-6-div-1-div-1">
     <div id="home-section-6-div-1-1">
      <img id="home-section-6-div-1-1-img" src={project_deliverd} alt={project_deliverd} />
     </div>
     <div id="home-section-6-div-1-2">
      <p id="home-section-6-div-1-2-p-1">96 projects </p>
      <p id="home-section-6-div-1-2-p-2">Deliver Result</p>
    </div>
    </div>
   </div>
</section>

  {/* Section 7 */}

  <section id="home-section-7">
    <div className='container' id="home-section-7-div-1">
     <div id="home-section-7-div-1-1">
      <p id="home-section-7-div-1-1-p-1">Clients Review</p>
     </div>
     <div id="home-section-7-div-1-2">
      <p id="home-section-7-div-1-2-p-1">What Our Customers Say</p>
     </div>
     <div id="home-section-7-div-1-3">
      {
        client_review.map((item) => (
          <div id="home-section-7-div-1-3-1">
          <div id="home-section-7-div-1-3-1-star">
           <FaStar id="home-section-7-div-1-3-1-star-ico"  />
           <FaStar id="home-section-7-div-1-3-1-star-ico" />
           <FaStar id="home-section-7-div-1-3-1-star-ico" />
           <FaStar id="home-section-7-div-1-3-1-star-ico" />
           <FaStar id="home-section-7-div-1-3-1-star-ico" />
          </div>
          <div id="home-section-7-div-1-3-2">
            <p id="home-section-7-div-1-3-2-p-1">{item.description}</p>
        </div>
  
        <div id="home-section-7-div-1-3-3">
           <img src={item.img} alt={item.img} /> 
        </div>
  
        <div id="home-section-7-div-1-3-4">
           <p id="home-section-7-div-1-3-4-p-1">{item.name}</p>
        </div>
  
        <div id="home-section-7-div-1-3-5">
           <p id="home-section-7-div-1-3-5-p-1">{item.role}</p>
        </div>
  
        </div>
        ))
      }

    
     </div>
    </div>
  </section>

    {/* Section 8 */}

  <section id="home-section-8">
     <div className='container' id="home-section-8-div-1">
      <p id="home-section-8-div-1-p-1">Lets Create Your Project</p>
      <button id="home-section-8-div-1-button">Contact us</button>
     </div>
  </section>



    </div>
  )
}

export default Home;
