import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import PrimaryButton from '../components/PrimaryButton'

import styles from './alternatives.module.scss'
import sharedStyles from '../assets/shared-styles/shared.module.scss'

export default ({ data }) => (
  <Layout>
    <div>
      <Img
        alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
        fluid={data.alternativesImage.childImageSharp.fluid}
      />

      <div className={styles.statistic}>
        <h1>49%</h1>
        <p>
          of sex buyers have never told anyone they bought sex
        </p>
      </div>

      <div className={classNames(styles.quote, styles.blueBackground)}>
        <p className={styles.statement}>
          "It's such a relief to be out of that life cycle."
        </p>
        <p className={styles.signature}>- former sex buyer</p>
      </div>

      <div className={styles.statistic}>
        <h1>64%</h1>
        <p>
          of sex buyers in the United States said they want to stop
        </p>
      </div>

      <div className={classNames(styles.quote, styles.tealBackground)}>
        <p className={styles.statement}>
          "I learned that the harms of prostitution go much deeper than what
          appears on the surface."
        </p>
        <p className={styles.signature}>- fomer sex buyer</p>
      </div>

      <div className={sharedStyles.contentWrapper}>
        <p className={styles.outboundaction}>
          Make the choice without regret...
          <br />
          learn about alternatives today.
          <OutboundLink href={data.site.siteMetadata.alternatives_url} target="_blank">
            <PrimaryButton>Learn More</PrimaryButton>
          </OutboundLink>
        </p>

        <p className={styles.outboundaction}>
          For more information,
          <OutboundLink href="tel: { data.site.siteMetadata.alternatives_phone }" target="_blank">
            Click to Call
          </OutboundLink>
        </p>

        <p className={styles.outboundaction}>
          or visit the following website:
          <OutboundLink href={data.site.siteMetadata.alternatives_url} target="_blank">
            {data.site.siteMetadata.alternatives_website}
          </OutboundLink>
        </p>
      </div>

      <div className={classNames(styles.quote, styles.blueBackground)}>
        <p className={styles.statement}>
          "Prostitution hurts everyone that's involved, but we can do something
          to stop it."
        </p>
        <p className={styles.signature}>- former sex buyer</p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query AlternativesQuery {
    site {
      siteMetadata {
        alternatives_website
        alternatives_url
        alternatives_phone
      }
    }

    alternativesImage: file(relativePath: { eq: "alternatives.jpg" }) {
      ...fluidImage
    }
  }
`
