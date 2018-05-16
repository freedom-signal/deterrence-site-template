import React, { Children } from 'react'
import { options } from '../../utils/typography';

import styles from './index.module.scss';

const PrimaryButton = props => (
  <button className={styles.primaryButton} style={{fontFamily: options.headerFontFamily.join(`,`)}} id={props.buttonId}>
    { props.children }
  </button>
)

export default PrimaryButton
