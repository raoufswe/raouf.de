import React from 'react' 
import Layout from '../components/layout'
import Listing from '../components/listing';
import { Helmet } from "react-helmet"

const IndexPage = ({location}) => (

<div>
    <Helmet>         
    <meta charSet="utf-8" />  
    <meta name="description" content="This is a personal website for Raouf" />
  <title>Raouf's webite</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  
    </Helmet>

 <Layout location={location}>
 <Listing/>
</Layout>
</div>

 


)

export default IndexPage
