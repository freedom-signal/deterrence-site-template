import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import PrimaryButton from '../components/PrimaryButton'

import styles from './contact.module.scss'
import sharedStyles from '../assets/shared-styles/shared.module.scss'
 
export default ({ data }) => (
  <Layout>
    <div>
      <Img
        alt="Text overlay that reads: You are not alone. There is Help available. Background image of man sitting on a wall looking sad and thoughtful."
        fluid={data.heroImage.sizes}
      />

      <div className={sharedStyles.pageWrapper}>
        <div>
          <h1>Want to talk?</h1>
          <div className={sharedStyles.dividerLine} />
          <p>Get help from men who understand this experience.</p>
          <p>
            Our resources counselor will connect you with services in your area.
          </p>
        </div>

        <form>
          <div className={styles.contactInput}>
            <i className={styles.inputIcon} />
            <input
              className={styles.emailField}
              type="email"
              placeholder="your email address"
            />
          </div>

          <PrimaryButton url="/">Get Confidential Help</PrimaryButton>
        </form>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ContactQuery {
    heroImage: imageSharp(id: { regex: "/contact1/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`