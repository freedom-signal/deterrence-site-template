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
    <Img
      alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
      fluid={data.alternativesImage.childImageSharp.fluid}
    />

    <div className={styles.statContainer}>
      {/* demand abolition 2017 stat */}
      <h1 className={styles.highlightUnderline}>
        <span>76%</span>
      </h1>
      <p className={styles.statCaption}>
        of anonymous sex buyers in the United States said they{' '}
        <span className={styles.highlightUnderline}>want to stop</span>
      </p>
    </div>
    <div className={classNames(styles.quote, styles.tealBackground)}>
      {/* OPS SSE Evaluation Quote */}
      <p className={styles.statement}>
        "It's such a relief to be out of that life cycle."
      </p>
      <p className={styles.signature}>- fomer sex buyer</p>
    </div>

    <div className={styles.statContainer}>
      <h1 className={styles.highlightUnderline}>
        <span>49%</span>
      </h1>
      <p className={styles.statCaption}>
        of sex buyers have <br />
        <span className={styles.highlightUnderline}>
          never told anyone
        </span>{' '}
        they bought sex
      </p>
    </div>

    <div className={styles.quote}>
      {/* 2018 SSE Evaluation Quote */}
      <p className={styles.statement}>
        "I am more aware of how my feelings impact my actions and the
        consequences are negative and not ultimately fulfilling participating in
        prostitution."
      </p>
      <p className={styles.signature}>- former sex buyer</p>
    </div>

    <div className={sharedStyles.contentWrapper}>
      <p className={styles.outboundaction}>
        Make the choice without regret... learn about alternatives today.
          <PrimaryButton href="/request-help" label="Alternatives -> Request Help">Request Help</PrimaryButton>
      </p>

      <p className={styles.outboundaction}>
        For more information,
        <OutboundLink
          href="tel: { data.site.siteMetadata.alternatives_phone }"
          target="_blank"
        >
          <span className={styles.highlightUnderline}>Click to Call</span>
        </OutboundLink>
      </p>

      <p className={styles.outboundaction}>
        or visit the following website:
        <OutboundLink
          href={data.site.siteMetadata.alternatives_url}
          target="_blank"
        >
         <span className={styles.highlightUnderline}>{data.site.siteMetadata.alternatives_website}</span>
        </OutboundLink>
      </p>
    </div>

    <div className={styles.quote}>
      {/* OPS SSE Evaluation Quote */}
      <p className={styles.statement}>
        "Prostitution hurts everyone that's involved, but we can do something to
        stop it."
      </p>
      <p className={styles.signature}>- former sex buyer</p>
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
