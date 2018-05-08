import React from 'react';
import Link from 'gatsby-link';
import sharedStyles from '../assets/shared-styles/shared.module.scss';

const HarmPage = () => (
  <div>
    <div>
      <h1>Want to talk?</h1>
      <div className={sharedStyles.dividerLine}></div>
      <p>Get help from men who understand this experience.</p>
      <p>Our resources counselor will connect you with services in your area.</p>
    </div>

    <div>
      <input></input>
      <button>Get confidential help</button>
    </div>
  </div>
)

export default HarmPage