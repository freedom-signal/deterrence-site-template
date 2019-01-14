import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PrimaryButton from '../components/PrimaryButton'

import styles from './index.module.scss'

import harmIcon from '../assets/images/wound.svg'
import consequencesIcon from '../assets/images/handcuffs.svg'
import alternativesIcon from '../assets/images/arrows.svg'
import contactIcon from '../assets/images/helpinghand.svg'

export default ({ data }) => (
  <Layout>
    <div className={styles.pageContainer}>
      <div className={styles.intro}>
        <h1 className={styles.highlightUnderline}>
          <span>{data.site.siteMetadata.title}</span>
        </h1>
        <p className={styles.tagline}>It's not as harmless as you think.</p>

        <div className={styles.dividerLine} />

        <p className={styles.siteDescription}>
          {data.site.siteMetadata.description}
        </p>
      </div>

      <div className={styles.iconsArea}>
        <a href="/harm" className={styles.iconCard}>
          <img src={harmIcon} alt="An icon of head with wound" />

          <p className={styles.cardDescription}>
            Beatings, rapes and murder are a reality of prostitution.
          </p>
        </a>
        <PrimaryButton href="/alternatives" label="Home -> Harms">
          The Harms ⟶
        </PrimaryButton>

        <div className={styles.dividerLine} />

        <a href="/consequences" className={styles.iconCard}>
          <img src={consequencesIcon} alt="An icon of handcuffs" />

          <p className={styles.cardDescription}>
            Police are arresting men who buy sex.
          </p>
        </a>
        <PrimaryButton href="/consequences" label="Home -> Consequences">
          Consequences ⟶
        </PrimaryButton>

        <div className={styles.dividerLine} />

        <a href="/alternatives" className={styles.iconCard}>
          <img src={alternativesIcon} alt="Three divergent arrows" />

          <p className={styles.cardDescription}>
            Make the choice without regret.
          </p>
        </a>
        <PrimaryButton href="/alternatives" label="Home -> Alternatives">
          Alternatives ⟶
        </PrimaryButton>

        <div className={styles.dividerLine} />

        <a href="/request-help" className={styles.iconCard}>
          <img src={contactIcon} alt="An icon of two hands clasping" />

          <p className={styles.cardDescription}>
            Get help from men who understand this experience.
          </p>
        </a>
        <PrimaryButton href="/request-help" label="Home -> Request Help">
          Request Help ⟶
        </PrimaryButton>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
