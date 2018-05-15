import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PrimaryButton from '../components/PrimaryButton';

import styles from './contact.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const ContactPage = ({ data }) => (
  <div>
    <Img
    alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
    sizes={data.heroImage.sizes}
    />

    <div className={sharedStyles.pageWrapper}>
      <div>
        <h1>Want to talk?</h1>
        <div className={sharedStyles.dividerLine}></div>
        <p>Get help from men who understand this experience.</p>
        <p>Our resources counselor will connect you with services in your area.</p>
      </div>

      <form>
        <input className={styles.emailField}
              type='email' 
              placeholder='your email address' >
        </input>
        <PrimaryButton url="/">Get Confidential Help</PrimaryButton>
      </form>
    </div>
  </div>
)

export const query = graphql`
  query ContactQuery {
    heroImage: imageSharp(id: {regex: "/contact1/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default ContactPage