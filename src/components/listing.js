import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
 
const LISTING_QUERY = graphql`
        query BlogPostLIsting{
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

const Listing = () => (
    <StaticQuery 
    query= {LISTING_QUERY}
    
    render = {({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(edge => (

                    <div className="col-lg-4">
                      <div className="card card-lift--hover shadow border-0">
                        <div className="card-body py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold"></i>
                          </div>
                          <Link  to={`/posts${edge.node.frontmatter.slug}`}>
                          <h6 className="text-primary text-uppercase">📝<strong>{edge.node.frontmatter.title}</strong></h6>
                          </Link>
                          <p className="description mt-3"><strong>📅 {edge.node.frontmatter.date}</strong></p>
                          <p className="description mt-3">{edge.node.frontmatter.description}</p>
                          <Link  to={`/posts${edge.node.frontmatter.slug}`} className="btn btn-primary mt-4">Learn more</Link>
                        </div>
                      </div>
                    </div>

        ))
    )}
    
    />
)

export default Listing
