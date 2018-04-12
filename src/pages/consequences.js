import React from 'react'
import Link from 'gatsby-link'

const ConsequencesPage = ({ data }) => (
  <div>
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
  }
`
export default ConsequencesPage