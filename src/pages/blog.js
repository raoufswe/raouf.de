import React from 'react'; 
import Footer from '../components/footer'
import "../components/css/postLayout.css"
import { Link } from 'gatsby'
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
  <header className="header-global">
          <nav id="navbar-main" className="navbar   navbar-transparent  ">
        <div className="container" >
  
      <Link to={`/`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🏡 Home </Link>
      <Link  to={`/about`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🙋🏼‍♂️ About</Link>
 
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
            <p className="display-4  text-white"> "Power is gained by sharing knowledge, not hoarding it." <span role="img" aria-label="">📚</span></p>
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
                        <h6 className="text-primary text-uppercase"><span role="img" aria-label="">📝</span><strong>{edge.node.frontmatter.title}</strong></h6>
                        </Link>
                        <p className="description mt-3"><strong><span role="img" aria-label="">📅</span>{edge.node.frontmatter.date}</strong></p>
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
