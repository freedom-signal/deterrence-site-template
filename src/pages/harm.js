import React from 'react';
import classNames from 'classnames';
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
        <p>Beatings, rapes and murder are a reality of prostitution.</p>
        <p>You dont want to buy in to that.</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p>85% to 95%</p>
        <p>of those in prostitution want to escape it, but have no other options for survival</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p>60% to 75%</p>
        <p>have been raped while working as a prostitute</p>
      </div>

      <Img
        alt="Text overlay that reads: If you're buying sex, you're fueling violence towards women like me."
        sizes={data.secondHarmImage.sizes}
      />

      <div>
        <p>13% to 15%</p>
        <p>of prostituted people reported that their buyers were abusive or violent</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p>36%</p>
        <p>of prostituted people reported that their buyers were abusive or violent</p>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p>Prostitution also impacts those who buy sex. Want to learn more?</p>
      </div>

      <div className={styles.icon}>
        <a href="/consequences">
          <img src={consequencesIcon} alt="An icon of handcuffs"/>
          <h2>Consequences</h2>
        </a>
      </div>

      <div className={styles.icon}>
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
