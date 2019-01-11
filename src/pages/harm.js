import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

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
      {/* Prostitution and Trafficking in Nine Countries (Farley et al., 2003)
       */}
      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>89%</h1>
        <p className={styles.statCaption}>
          of those in prostitution want to leave "the life"
        </p>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>73%</h1>
        <p className={styles.statCaption}>
          of women report being physically assaulted
        </p>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>13</h1>
        <p className={styles.toWord}>to</p>
        <h1 className={styles.statPercentage}>15</h1>

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

      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>75%</h1>
        <p className={styles.statCaption}>report having no safe place to go</p>
      </div>

      <div className={sharedStyles.dividerLine} />

      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>36%</h1>
        <p className={styles.statCaption}>
          of prostituted people reported that their buyers were abusive or
          violent
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
