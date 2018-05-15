import React, { Children } from 'react'
import { options } from '../../utils/typography';

import styles from './index.module.scss';

const PrimaryButton = ({children}) => (
  <button className={styles.primaryButton} style={{fontFamily: options.headerFontFamily.join(`,`)}}>
    {children}
  </button>
)

export default PrimaryButton
