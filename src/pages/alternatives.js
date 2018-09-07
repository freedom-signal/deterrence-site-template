import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PrimaryButton from '../components/PrimaryButton';

import styles from './alternatives.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const AlternativesPage = ({ data }) => (
  <div>
    <Img
      alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
      sizes={data.alternativesImage.sizes}
    />

    <div className={sharedStyles.pageWrapper}>
      <div>
        <h1 className={styles.statPercentage}>49%</h1>
        <p>of sex buyers have never told anyone they bought sex</p>
      </div>
      <div>
        <p>"It's such a relief to be out of that life cycle." -former sex buyer</p>
      </div>
      <div>
        <h1 className={styles.statPercentage}>64%</h1>
        <p>of sex buyers in the United States said they want to stop</p>
      </div>
      <div>
        <p>"I learned that the harms of prostitution go much deeper than what appears on the surface."- fomer sex buyer</p>
      </div>
      <div>
        <p>Make the choice without regret...contact us today</p>
      </div>
      <div>
        <PrimaryButton url="/">Learn More</PrimaryButton>
      </div>
      <div className={sharedStyles.dividerLine}></div>
      <div>
        <p>For more information, call
          (800) 724-7907
          or visit the following website:
          Seattle OPS</p>
      </div>
      <div>
        <p>"Prostitution hurts everyone that's involved, but we can do something to stop it." -former sex buyer
        </p>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query AlternativesQuery {
    site {
      siteMetadata {
        contact_website
        contact_url
        contact_phone
      }
    }
    alternativesImage: imageSharp(id: {regex: "/alternatives1/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`






export default AlternativesPage
