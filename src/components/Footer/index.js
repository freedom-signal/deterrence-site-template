import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from './index.module.scss'

import logo from '../../assets/images/NDHTTF-horizontal.png'

const Footer = () => (
  <footer className={styles.footer}>
    <OutboundLink href="https://www.ndhttf.org/" target="_blank">
      <img src={logo} alt="North Dakota Human Trafficking Taskforce logo" />
    </OutboundLink>
  </footer>
)

export default Footer
