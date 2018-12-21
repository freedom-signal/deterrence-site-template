import React from 'react'

import styles from './index.module.scss'

const PrimaryButton = ({ children }) => (
  <button className={styles.primaryButton}>{children}</button>
)

export default PrimaryButton
