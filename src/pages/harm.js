import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import classNames from 'classnames'

import Layout from '../components/layout'
import PrimaryButton from '../components/PrimaryButton'

import styles from './harm.module.scss'
import sharedStyles from '../assets/shared-styles/shared.module.scss'

export default ({ data }) => (
  <Layout>
    <Img
      alt="Text overlay that reads: At the end of my first day, my legs and arms were covered in bruises."
      fluid={data.harmImage.childImageSharp.fluid}
    />

    <div className={sharedStyles.contentWrapper}>
      <div>
        <p className={styles.firstStatement}>
          Beatings, rapes and murder are a reality of prostitution.
        </p>
        <p className={styles.firstStatement}>
          You don't want to buy into that.
        </p>
      </div>

      <div className={sharedStyles.dividerLine} />
      {/* Prostitution and Trafficking in Nine Countries (Farley, 2003) */}

      <div className={styles.statContainer}>
        <h1 className={styles.highlightUnderline}><span>89%</span></h1>
        <p className={styles.statCaption}>
          of those in prostitution{' '}
          <span className={styles.highlight}> want to leave "the life"</span>
        </p>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div className={styles.statContainer}>
        <p className={styles.statCaption}>
          Percentage of women who report being
          <span className={styles.highlight}>
            physically assaulted:
          </span>
        </p>
        <h1 className={styles.statPercentage}>73%</h1>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div className={classNames(styles.statContainer, styles.ageRange)}>
        <h1 className={styles.highlightUnderline}>
          <span>13
            <span className={styles.mini}>to</span>
          15</span>
        </h1>
        <h1 className={styles.secondaryHeader}>
        <span className={styles.mini}>years old</span>
        </h1>

        <p className={styles.statCaption}>
          The typical age of entry into prostitution
        </p>
      </div>
    </div>

    <Img
      alt="Text overlay that reads: If you're buying sex, you're fueling violence towards women like me."
      fluid={data.secondHarmImage.childImageSharp.fluid}
      className={styles.secondImage}
    />

    <div className={sharedStyles.contentWrapper}>
    <div className={styles.statContainer}>
        <h1 className={styles.highlightUnderline}>75%</h1>
        <p className={styles.statCaption}>
        report having 
          <span className={styles.highlight}>no safe place to go</span>
        </p>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div>
        <p className={styles.finalStatement}>
          Prostitution also impacts those who buy sex. Want to learn more?
        </p>
      </div>

      <div className={styles.actionButtons}>
        <div className={styles.consequences}>
          <PrimaryButton href="/consequences">Consequences</PrimaryButton>
        </div>

        <div className={styles.alternatives}>
          <PrimaryButton href="/alternatives">Alternatives</PrimaryButton>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query HarmQuery {
    harmImage: file(relativePath: { eq: "harm1-beaten.png" }) {
      ...fluidImage
    }
    secondHarmImage: file(relativePath: { eq: "harm2-fueling-violence.png" }) {
      ...fluidImage
    }
  }
`
