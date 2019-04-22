import React from 'react'; 
import Footer from '../components/footer'
import "../components/css/postLayout.css"
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const LISTING_QUERY = graphql`
        query BlogPostLIstingforTheBlog{
                        allMarkdownRemark(limit: 3, sort: {
                            order: DESC,
                            fields: [frontmatter___date]
                        }) { 
                            edges{
                                node {
                                excerpt
                                    frontmatter {
                                        date(formatString: "MMMM DD, YYYY")
                                        title
                                        slug
                                        description
                            
                            }
                        }
                    }
                }
            }
`

const Blog = ({children, location }) => (
  <div>
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
            
            
              <a   className="nav-link headerA"  data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <Link style={{color: 'white'}} to={`/`}>
                <span className="nav-link-inner--text">Home</span>
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
  
    <section className="section section-lg section-shaped ">
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
      <div className="container ">
  
        <div className="row justify-content-center text-center">
            <p className="display-4  text-white"> "Power is gained by sharing knowledge, not hoarding it." 📚</p>
        </div>
    
    </div>
  
      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  
  </div>
    </main>
    </div>
  <StaticQuery 
  query= {LISTING_QUERY}

  render = {({allMarkdownRemark}) => (
  
      allMarkdownRemark.edges.map(edge => (
      <div className="row justify-content-center">
                  <div style={{margin: '13px'}} className="col-lg-4">
                    <div className="card card-lift--hover shadow border-0">
                      <div className="card-body py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold"></i>
                        </div>
                        <Link  to={`/posts${edge.node.frontmatter.slug}`} >
                        <h6 className="text-primary text-uppercase"> 📝{edge.node.frontmatter.title}</h6>
                        </Link>
                        <p className="description mt-3"><strong>📅 {edge.node.frontmatter.date}</strong></p>
                        <p className="description mt-3">{edge.node.frontmatter.description}</p>
                        <Link  to={`/posts${edge.node.frontmatter.slug}`} className="btn btn-primary mt-4">Learn more</Link>
                      </div>
                    </div>
                  </div>
                  </div>

      ))

      
  )}
  

  />

  <Footer />
  </div>
  )
  


  export default Blog
