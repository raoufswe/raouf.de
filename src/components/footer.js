
import React from 'react'; 

import "../components/css/postLayout.css"

import { Link } from 'gatsby'

const Footer = ({location}) => (
    
    <footer className="footer footerPadding ">
 
    <div class="container">
    <div class="row row-grid align-items-center">
        <div class="col-lg-6">
          <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
        </div>
        <div class="col-lg-6 text-lg-center">
        <a target="_blank" href="https://www.linkedin.com/in/abdurraouf-fathi-aa3a81131/" class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" data-toggle="tooltip" data-original-title="Linkedin">
            <i class="fa fa-linkedin"></i>
          </a>

          <a target="_blank" href="https://github.com/raoufswe" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title=" Github">
            <i class="fa fa-github"></i>
          </a>

          <a target="_blank" href="https://twitter.com/Roufrey" class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="https://instagram.com/raoufswe" class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip" data-original-title="instagram">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <hr />  
      <div class="row align-items-center justify-content-md-between">
      <div class="col-md-6">
        <div class="copyright">
          &copy; 2019 
          
          <a  href="https://github.com/raoufswe" target="_blank"> Raouf Fathi 👋</a>
         
        </div>
      </div>
      <div class="col-md-6">
        <ul class="nav nav-footer justify-content-end">
          
          <li class="nav-item">
          <Link to={`/`}>
            <a class="nav-link" target="_blank">Home</a>
          </Link>
          </li>

          <li class="nav-item">
          <Link to={`/blog`}>
            <a class="nav-link" target="_blank">Blog</a>
            </Link>
          </li>

          <li class="nav-item">
          <Link to={`/about`}>
            <a   class="nav-link" target="_blank">About</a>
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    </div>
  </footer>


)

export default Footer

