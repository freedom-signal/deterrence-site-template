import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GetHelpForm from '../components/GetHelpForm'

import sharedStyles from '../assets/shared-styles/shared.module.scss'
 
export default ({ data }) => (
  <Layout>
    <div>
      <Img
        alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
        fluid={data.heroImage.childImageSharp.fluid}
      />

      <div className={sharedStyles.contentWrapper}>
        <div>
          <h1>Want to talk?</h1>
          <div className={sharedStyles.dividerLine} />
          <p>Get help from men who understand this experience.</p>
          <p>
            Our resources counselor will connect you with services in your area.
          </p>
        </div>

        <GetHelpForm webhook={data.site.siteMetadata.zapier_webhook} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        zapier_webhook
      }
    }
    heroImage: file(relativePath: { eq: "contact.jpg" }) {
      ...fluidImage
    }
  }
`