import React from 'react'; 
import svgPic from '../images/ill-2.svg'
import "../components/css/postLayout.css"


const Bio = ({location}) => (

    <section class="section bg-gradient-default">
    <div class="container">
    <h3 class="display-3 text-primary">   What I love to do 👨🏻‍🏫 </h3>
      <div class="row row-grid align-items-center">
     
        <div class="col-md-6 order-lg-2 ml-lg-auto">
          <div class="position-relative pl-md-5">
          <img src={svgPic} class="img-center img-fluid" alt="svg-pic" />
          </div>
        </div>

        <div class="col-lg-6 order-lg-1">
           
            <div class="card shadow shadow-lg--hover ">
              <div class="card-body">
  
                 
                  <div class="pl-4">
                    <h5 class="title text-primary">Network Engineering ✨</h5>
                    <p>Network Computing is my bachelor’s degree specialism which laid a good foundation for me to get the CCNA R&S. While certifications are vital, I look forward to gaining more hands-on experience before I go forward to higher certifications.</p>
                    
                  </div>
                
              </div>
            </div>
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
           
                 
                  <div class="pl-4">
                    <h5 class="title text-primary">Software development ✨</h5>
                    <p>Ranging from stand alone applications to web applications, nothing is more exciting than being able to transform an idea to a real world product that simplifies the way we live.</p>
                  </div>
               
              </div>
            </div>

            <div className="btn-wrapper mt-5  ">
            <a href="https://s3.amazonaws.com/raoufrey/CV.pdf" class="btn btn-warning btn-icon" aria-label="CV">
             
                  <i class="fa fa-cloud-download mr-2    "></i>
               
                <span class="nav-link-inner--text">Download my resume</span>
              </a>
           
          </div>
          </div>
      </div>
    </div>

    <div class="separator separator-bottom separator-skew zindex-100">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>

);

export default Bio


