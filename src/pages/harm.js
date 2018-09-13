import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

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
        <div className={sharedStyles.dividerLine}></div>
      </div>
      <div>
        <p>85% to 95%</p>
        <p>of those in prostitution want to escape it, but have no other options for survival</p>
        <div className={sharedStyles.dividerLine}></div>
      </div>
      <div>
        <p>60% to 75%</p>
        <p>have been raped while working as a prostitute</p>
        <div className={sharedStyles.dividerLine}></div>
      </div>
      <Img
        alt="Text overlay that reads: If you're buying sex, you're fueling violence towards women like me."
        sizes={data.secondHarmImage.sizes}
      />
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
