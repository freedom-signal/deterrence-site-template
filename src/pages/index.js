import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';


import harmIcon from '../assets/images/harm-icon.png';
import consequencesIcon from '../assets/images/consequences-icon.png';
import alternativesIcon from '../assets/images/alternatives-icon.png';
import contactIcon from '../assets/images/contact-icon.png';

const IndexPage = ({ data }) => (
  <div className={styles.pageContainer}>
    <div className={styles.intro}>
      <h1 className={styles.pageTitle}>{data.site.siteMetadata.title}</h1>
      <p className={styles.tagline}>It's not as harmless as you think.</p>
      <div className={sharedStyles.dividerLine}></div>
      <p className={styles.siteDescription}>{data.site.siteMetadata.description}</p>
    </div>

    <div className={styles.iconsArea}>

      <div className={styles.iconCard}>
        <a href="/harm">
          <img src={harmIcon} alt="An icon of a medical bag"/>

            <h2 className={styles.cardTitle}>Harm</h2>
          <p className={styles.cardDescription}>Beatings, rapes and murder are a reality of prostitution.</p>
        </a>
      </div>

      <div className={styles.iconCard}>
        <a href="/consequences">
          <img src={consequencesIcon} alt="An icon of handcuffs"/>

          <h2 className={styles.cardTitle}>Consequences</h2>
          <p className={styles.cardDescription}>Police are arresting men who buy sex.</p>
        </a>
      </div>

      <div className={styles.iconCard}>
        <a href="/alternatives">
          <img src={alternativesIcon} alt="An icon of the Alt key"/>

          <h2 className={styles.cardTitle}>Alternatives</h2>
          <p className={styles.cardDescription}>Make the choice without regret.</p>
        </a>
      </div>

      <div className={styles.iconCard}>
        <a href="/contact">
          <img src={contactIcon} alt="An icon of an envelope"/>

          <h2 className={styles.cardTitle}>Contact</h2>
          <p className={styles.cardDescription}>Get help from men who understand this experience.</p>
        </a>
      </div>

    </div>
  </div>
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

export default IndexPage
