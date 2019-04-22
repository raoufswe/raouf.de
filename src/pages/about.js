import React from 'react'; 


import Footer from '../components/footer.js'
import "../components/css/postLayout.css"
import mypic from '../images/28605803.jpg'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
const About = ({location}) => (

 <div>
 
 <header className="header-global">
          <nav id="navbar-main" className="navbar   navbar-transparent  ">
        <div className="container" >
  
      <Link to={`/`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🏡 Home </Link>
      <Link  to={`/blog`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🧾 Blog</Link>
 
      </div>

</nav>
      </header>
  <main className="profile-page">
    <section className="section-profile-cover section-shaped my-0">

      <div className="shape shape-style-1 shape-default">
        
      <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
   
      <div className="container">
        <div className="card card-profile shadow mt--300">
        <div className="picPadding">
        <div className="card-profile-image  "> 
        <img src={mypic} className="rounded-circle picPadding" />    
     </div>
     </div>
          <div  className="px-4 ">

            <div className="text-center mt-5 ">
              <h3>Raouf Fathi
                
              </h3>
              <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>Kuala Lumpur, Malaysia 🌎 </div>
              <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>Network Engineer - Software Developer 👨🏻‍💻 </div>
              <div><i className="ni education_hat mr-2"></i>Asia Pacific University 🎓</div>
            </div>
            <div className="mt-5 py-5 border-top ">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <p>I'm a Network Computing graduate with interest in web development, network automation, and programmability. I seek all ways to improve my personal and technical skills and to gain more experience and allow the development and growth of my knowledge 💁‍♂️</p>
                  
                  <p>While pursuing my bachelor's degree and self-education journey, I have gained a good knowledge of networking and security technologies as well as programming in different languages such as Python, Java, C, and JavaScript 🦸‍♂️</p>
                 <p> In my spare time, I enjoy watching documentaries and TV series, playing football and sometimes writing 🤙
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </main>


<Footer/>

 </div>
);

export default About