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
          <nav id="navbar-main" className="navbar   navbar-transparent  ">
        <div className="container" >
  
      <Link to={`/blog`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🧾 Blog</Link>
      <Link  to={`/about`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🙋🏼‍♂️ About</Link>
 
      </div>

</nav>
      </header>
    <main>
      <div className="position-relative">

        <section className="section section-md section-shaped pb-200">
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
          <div className="container py-lg-sm">
            <div className="col px-0">
              <div className="row">
                <div className="col-lg-8">
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
      
      <section className="section section-sm pt-lg-1 mt--200">
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
