import React from 'react';
import Link from 'gatsby-link';
import styles from './contact.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const HarmPage = () => (
  <div className={styles.pageWrapper}>
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
      <button>Get confidential help</button>
    </form>
  </div>
)

export default HarmPage