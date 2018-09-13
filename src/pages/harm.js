import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import styles from './harm.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const HarmPage = ({ data }) => (
  <div>
    <Img
      alt="Text overlay that reads: If you're buying sex, you're fueling violence towards women like me."
      sizes={data.harmImage.sizes}
    />
    <div className={sharedStyles.pageWrapper}>
      <div>
        <p>Beatings, rapes and murder are a reality of prostitution.</p>
        <p>You dont want to buy in to that.</p>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HarmQuery {
    harmImage: imageSharp(id: {regex: "/harm2-fueling-violence/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default HarmPage
