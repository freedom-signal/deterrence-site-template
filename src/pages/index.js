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
          {data.site.siteMetadata.title}
        </h1>
        <h3 className={styles.tagline}>It's not as harmless as you think.</h3>

        <div className={styles.dividerLine} />

        <p className={styles.siteDescription}>
          {data.site.siteMetadata.description}
        </p>
      </div>

      <div className={styles.iconsArea}>
        <div className={styles.iconCard}>
          <a href="/harm">
            <img src={harmIcon} alt="An icon of head with wound" />

            <p className={styles.cardDescription}>
              Beatings, rapes and murder are a <br />
              <span className={styles.highlightUnderline}>
                reality of prostitution.
              </span>
            </p>
          </a>
          <PrimaryButton href="/alternatives" label="Home -> Harms">
            Harms ⟶
          </PrimaryButton>
        </div>
        <div className={styles.dividerLine} />

        <div className={styles.iconCard}>
          <a href="/consequences">
            <img src={consequencesIcon} alt="An icon of handcuffs" />

            <p className={styles.cardDescription}>
              Police are <br />
              <span className={styles.highlightUnderline}>arresting men</span>
              <br />
              who buy sex.
            </p>
          </a>
          <PrimaryButton href="/consequences" label="Home -> Consequences">
            Consequences ⟶
          </PrimaryButton>
        </div>

        <div className={styles.dividerLine} />

        <div className={styles.iconCard}>
          <a href="/alternatives">
            <img src={alternativesIcon} alt="Three divergent arrows" />

            <p className={styles.cardDescription}>
              Make the choice <br />
              <span className={styles.highlightUnderline}>without regret.</span>
            </p>
          </a>
          <PrimaryButton href="/alternatives" label="Home -> Alternatives">
            Alternatives ⟶
          </PrimaryButton>
        </div>

        <div className={styles.dividerLine} />
        <div className={styles.iconCard}>
          <a href="/request-help">
            <img src={contactIcon} alt="An icon of two hands clasping" />

            <p className={styles.cardDescription}>
              <span className={styles.highlightUnderline}>Get help</span>
              <br />
              from men who understand this experience.
            </p>
          </a>
          <PrimaryButton href="/request-help" label="Home -> Request Help">
            Request Help ⟶
          </PrimaryButton>
        </div>
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
