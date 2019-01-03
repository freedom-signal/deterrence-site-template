import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

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

      <div className={sharedStyles.contentWrapper}>
        <h1 className={styles.statPercentage}>49%</h1>
        <p className={styles.statCaption}>
          of sex buyers have never told anyone they bought sex
        </p>
      </div>

      <div className={classNames(styles.quote, styles.blueBackground)}>
        <p className={styles.statement}>
          "It's such a relief to be out of that life cycle."
        </p>
        <p className={styles.signature}>-former sex buyer</p>
      </div>

      <div className={sharedStyles.contentWrapper}>
        <h1 className={styles.statPercentage}>64%</h1>
        <p className={styles.statCaption}>
          of sex buyers in the United States said they want to stop
        </p>
      </div>

      <div className={classNames(styles.quote, styles.tealBackground)}>
        <p className={styles.statement}>
          "I learned that the harms of prostitution go much deeper than what
          appears on the surface."
        </p>
        <p className={styles.signature}>-fomer sex buyer</p>
      </div>

      <div className={sharedStyles.contentWrapper}>
        <p className={styles.choice}>Make the choice without regret...</p>
        <p className={styles.contactUs}>contact us today.</p>

        <PrimaryButton url={data.site.siteMetadata.alternatives_url}>
          Learn More
        </PrimaryButton>

        <p className={styles.information}>For more information, </p>
        <a
          href="tel: { data.site.siteMetadata.alternatives_phone }"
          className={styles.link}
        >
          Click to Call
        </a>
        <p className={styles.visitSite}>or visit the following website:</p>
        <a href={data.site.siteMetadata.alternatives_url} className={styles.link}>
          {' '}
          {data.site.siteMetadata.alternatives_website}
        </a>
      </div>

      <div className={classNames(styles.quote, styles.blueBackground)}>
        <p className={styles.statement}>
          "Prostitution hurts everyone that's involved, but we can do something
          to stop it."
        </p>
        <p className={styles.signature}>-former sex buyer</p>
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
