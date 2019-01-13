import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PrimaryButton from '../components/PrimaryButton'

import styles from './index.module.scss'
import sharedStyles from '../assets/shared-styles/shared.module.scss'

import harmIcon from '../assets/images/harm-icon.png'
import consequencesIcon from '../assets/images/consequences-icon.png'
import alternativesIcon from '../assets/images/alternatives-icon.png'
import contactIcon from '../assets/images/contact-icon.png'

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
        <div className={styles.iconCard}>
          <a href="/harm">
            <img src={harmIcon} alt="An icon of a medical bag" />

            <p className={styles.cardDescription}>
              Beatings, rapes and murder are a reality of prostitution.
            </p>

            <PrimaryButton href="/alternatives" label="Home -> Harms">
              The Harms
            </PrimaryButton>
          </a>
        </div>

        <div className={styles.dividerLine} />

        <div className={styles.iconCard}>
          <a href="/consequences">
            <img src={consequencesIcon} alt="An icon of handcuffs" />

            <p className={styles.cardDescription}>
              Police are arresting men who buy sex.
            </p>

            <PrimaryButton href="/consequences" label="Home -> Consequences">
              Consequences
            </PrimaryButton>
          </a>
        </div>

        <div className={styles.dividerLine} />

        <div className={styles.iconCard}>
          <a href="/alternatives">
            <img src={alternativesIcon} alt="An icon of the Alt key" />

            <p className={styles.cardDescription}>
              Make the choice without regret.
            </p>

            <PrimaryButton href="/alternatives" label="Home -> Alternatives">
              Alternatives
            </PrimaryButton>
          </a>
        </div>

        <div className={styles.dividerLine} />

        <div className={styles.iconCard}>
          <a href="/request-help">
            <img src={contactIcon} alt="An icon of an envelope" />

            <p className={styles.cardDescription}>
              Get help from men who understand this experience.
            </p>

            <PrimaryButton href="/request-help" label="Home -> Request Help">
              Request Help
            </PrimaryButton>
          </a>
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
