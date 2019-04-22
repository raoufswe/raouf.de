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
            <nav id="navbar-main" className="navbar   navbar-transparent  ">
          <div className="container" >
    
        <Link to={`/`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🏡 Home</Link>
        <Link  to={`/about`} style={{color: 'white'}} class="nav-item headerA nav-link  navbar-nav-hover" >🙋🏼‍♂️ About</Link>
   
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
