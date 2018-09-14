import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import alternativesIcon from '../assets/images/alternatives-icon.png';
import consequencesIcon from '../assets/images/consequences-icon.png';

import styles from './harm.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const HarmPage = ({ data }) => (
  <div>
    <Img
      alt="Text overlay that reads: At the end of my first day, my legs and arms were covered in bruises."
      sizes={data.harmImage.sizes}
    />

    <div className={sharedStyles.pageWrapper}>
      <div>
        <p className={styles.firstStatement}>Beatings, rapes and murder are a reality of prostitution.</p>
        <p className={styles.firstStatement}>You dont want to buy in to that.</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>85%</h1>
        <p className={styles.toWord}>to</p>
        <h1 className={styles.statPercentage}>90%</h1>
      </div>
      <div>
        <p className={styles.statCaption}>of those in prostitution want to escape it, but have no other options for survival</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>60%</h1>
        <p className={styles.toWord}>to</p>
        <h1 className={styles.statPercentage}>75%</h1>
      </div>
      <div>
        <p className={styles.statCaption}>have been raped while working as a prostitute</p>
      </div>

      <Img
        alt="Text overlay that reads: If you're buying sex, you're fueling violence towards women like me."
        sizes={data.secondHarmImage.sizes} className={styles.secondImage}
      />

      <div className={styles.statDiv}>
        <h1 className={styles.statPercentage}>13</h1>
        <p className={styles.toWord}>to</p>
        <h1 className={styles.statPercentage}>15</h1>
      </div>
      <p className={styles.statCaption}>The typical age of entry into prostitution</p>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <h1 className={styles.statPercentage}>36%</h1>
        <p className={styles.statCaption}>of prostituted people reported that their buyers were abusive or violent</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p className={styles.finalStatement}>Prostitution also impacts those who buy sex. Want to learn more?</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/consequences">
          <img src={consequencesIcon} alt="An icon of handcuffs"/>
          <h2>Consequences</h2>
        </a>
        <a href="/alternatives">
          <img src={alternativesIcon} alt="An icon of the Alt key"/>
          <h2>Alternatives</h2>
        </a>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HarmQuery {
    harmImage: imageSharp(id: {regex: "/harm1-beaten/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    secondHarmImage: imageSharp(id: {regex: "/harm2-fueling-violence/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default HarmPage
