
import React from 'react'; 

import "../components/css/postLayout.css"

import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

const Footer = ({location}) => (
 
    <footer className="footer footerPadding ">
 
    <div className="container">
    <div className="row row-grid align-items-center">
        <div className="col-lg-6">
          <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
        </div>
        <div className="col-lg-6 text-lg-center">
        <a href="https://www.linkedin.com/in/abdurraouf-fathi-aa3a81131/" className="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" aria-label="Linkedin" data-original-title="Linkedin">
            <i className="fa fa-linkedin"></i>
          </a>

          <a href="https://github.com/raoufswe" className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" aria-label="Github" data-original-title=" Github">
            <i className="fa fa-github"></i>
          </a>

          <a href="https://twitter.com/Roufrey" className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" aria-label="Twitter" data-original-title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com/raoufswe" className="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" aria-label="instagram" data-original-title="instagram">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <hr />  
      <div className="row align-items-center justify-content-md-between">
      <div className="col-md-6">
        <div className="copyright">
          &copy; 2019 
          
          <a  href="https://github.com/raoufswe"> Raouf Fathi 👋</a>
         
        </div>
      </div>
      <div className="col-md-6">
        <ul className="nav nav-footer justify-content-end">
          
          <li className="nav-item">
          <Link  className="nav-link" to={`/`}>
           Home
          </Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link"  to={`/blog`}>
            Blog
            </Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to={`/about`}>
              About
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    </div>
  </footer>


)

export default Footer

