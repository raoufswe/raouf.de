import React from 'react'
import Footer from '../components/footer.js'
import Quote from '../components/quote.js'
import Bio from '../components/bio.js'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import "./css/postLayout.css"



const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
   
       
          <div>
          <header className="header-global">
          <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
            <div className="container">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                 
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                
                
                  <a   className="nav-link headerA"  data-toggle="dropdown"  role="button">
                    <i className="ni ni-collection d-lg-none"></i>
                    <Link style={{color: 'white'}} to={`/blog`}>
                    <span className="nav-link-inner--text">Blog</span>
                    </Link>
                    
                  </a>
                  <a   className="nav-link headerA"  data-toggle="dropdown" role="button">
                  <i className="ni ni-collection d-lg-none"></i>
                  <Link  style={{color: 'white'}} to={`/about`}>
                    <span className="nav-link-inner--text">About</span>
                    </Link>
                  
                </a>
                  
               
              </ul>
              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
         
        <li className="nav-item">
            <a className="nav-link nav-link-icon" href="https://www.linkedin.com/in/abdurraouf-fathi-aa3a81131/" target="_blank" data-toggle="tooltip" title="Linkedin">
              <i className="fa fa-linkedin"></i>
              <span className="nav-link-inner--text d-lg-none">Linkedin</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-link-icon" href="https://twitter.com/Roufrey" target="_blank" data-toggle="tooltip" title="Twitter">
              <i className="fa fa-twitter-square"></i>
              <span className="nav-link-inner--text d-lg-none">Twitter</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-icon" href="https://github.com/raoufswe" target="_blank" data-toggle="tooltip" title="Github">
              <i className="fa fa-github"></i>
              <span className="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-icon" href="https://www.researchgate.net/profile/Abdurraouf_Sawehli" target="_blank" data-toggle="tooltip" title="Star us on ResearchGate">
              <i className="fab fa-researchgate"></i>
              <span className="nav-link-inner--text d-lg-none">ResearchGate</span>
            </a>
          </li>
        </ul>
            </div>
          </div>
        </nav>
      </header>
    <main>
      <div className="position-relative">

        <section className="section section-lg section-shaped pb-200">
          <div className="shape shape-style-1 shape-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="container py-lg-md d-flex">
            <div className="col px-0">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="display-3  text-white">Hi there! 👋
                    <span>I'm Raouf</span>
                  </h1>
                  <p className="lead  text-white">I do things with computers. Making my way into the realm of technology</p>
                  <div className="btn-wrapper">
                  <Link className="btn btn-info btn-icon mb-3 mb-sm-0" to={`/blog`}>
                   
                      <span className="btn-inner--icon"><i className="fa fa-code"></i></span>
                      <span className="btn-inner--text">Check out my latest blogs</span>
                   
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="separator separator-bottom separator-skew">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
     
      </div>
      
      <section className="section section-lg pt-lg-1 mt--200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row row-grid">
            {children}
        </div>
        </div>
        </div>
        </div>
        </section>
        </main>
        <div>
        <Bio/>
        </div>
      
      <Quote/>
     
        <div>
<Footer/>
</div>
      </div>

      

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}
export default Layout
