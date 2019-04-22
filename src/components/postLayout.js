import React, { Component } from 'react';
import {Link} from 'gatsby'; 
import Footer from './footer'



class postLayout extends Component {
    render() {
        const {markdownRemark} = this.props.data;
        const {location} = this.props; 
        return (
        
            
            <div>
 
            <header className="header-global">
            <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light ">
              <div className="container">
  
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbar_global">
                <div className="navbar-collapse-header">
                  <div className="row">
                   
                    <div className="col-6 collapse-close">
                      <button type="button" className="navbar-toggler" data-toggle="collapse">
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li>
                <Link  className="nav-link headerA" style={{color: 'white'}} to={`/`}>
                <span className="nav-link-inner--text">Home</span>
                </Link>             
                </li>   
                <li>
                    <Link  className="nav-link headerA" style={{color: 'white'}} to={`/blog`}>
                      <span className="nav-link-inner--text">Blog</span>
                      </Link>
                </li>

                <li>
                <Link  className="nav-link headerA" style={{color: 'white'}} to={`/about`}>
                  <span className="nav-link-inner--text">About</span>
                  </Link>
            </li>
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
          </ul>
              </div>
            </div>
          </nav>
        </header>
  <main className="profile-page section-md">
    <section className="section-profile-cover section-shaped ">

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
       
          <div  className="px-4 ">

            <div className="text-center mt-5 ">
              <h3> 📝 {markdownRemark.frontmatter.title}
                
              </h3>
              <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i> 📅 {markdownRemark.frontmatter.date}</div>
            </div>
            <div className="mt-5 py-5 border-top ">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                   }}/>
                  
                </div>

                

              </div>
            </div>
            
          </div>
          
        </div>
      </div>

  </main>
  <div style={{paddingTop: '15px'}} className="row justify-content-center">
  <Link  to={`/blog`} className="btn btn-primary  ">Back</Link>
  <Link  to={`/`} className="btn btn-warning  ">Home</Link>
  </div>
<div>
<Footer/>
</div>
 </div>

                
        );
    }
}

export default postLayout;
export const query = graphql `
   query PostQuery($slug: String){
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
        }
        }) {
        html
        frontmatter{
            title
            date(formatString: "MMMM DD, YYYY")
            slug
        }
        }
    }
`
