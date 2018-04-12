import React from 'react'
import Link from 'gatsby-link'

const AlternativesPage = ({ data }) => (
  <div>
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
  }
`

export default AlternativesPage