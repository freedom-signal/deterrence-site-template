import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const AlternativesPage = ({ data }) => (
  <div>
    <Img
      alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
      sizes={data.alternativesImage.sizes}
    />
    <h1>Alternatives</h1>
    <p>{ data.site.siteMetadata.contact_website }</p>
    <p>{ data.site.siteMetadata.contact_url }</p>
    <p>{ data.site.siteMetadata.contact_phone }</p>
  </div>
)

export const query = graphql`
  query AlternativesQuery {
    site {
      siteMetadata {
        contact_website
        contact_url
        contact_phone
      }
    }
    alternativesImage: imageSharp(id: {regex: "/alternatives1/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default AlternativesPage