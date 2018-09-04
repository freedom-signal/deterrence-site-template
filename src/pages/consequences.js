import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

const ConsequencesPage = ({ data }) => (
  <div>
    <Img 
      alt="Text overlay that reads: It's not worth ruining your future. Background image of a man in the backseat of a police car."
      sizes={data.consequencesImage.sizes}
    />  
    <h1>Consequences</h1>
    <p>{ data.site.siteMetadata.jail_time }</p>
    <p>{ data.site.siteMetadata.fine }</p>
    <p>{ data.site.siteMetadata.sex_offender_registry }</p>
  </div>
)

export const query = graphql`
  query ConsequencesQuery {
    site {
      siteMetadata {
        jail_time
        fine
        sex_offender_registry
      }
    }
    consequencesImage: imageSharp(id: {regex: "/consequences1-arrested/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default ConsequencesPage