import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url} activeStyle={{ textDecoration: 'underline' }}>
      {props.label}
    </Link>
  </div>
)

const DesktopMenu = () => (
  <nav className={styles.desktopNav}>
    <div className={styles.leftMenu}>
      <MenuLink label="Stop Buying" url="/" aria-label="Home" />
    </div>

    <div className={styles.rightMenu}>
      <MenuLink label="Harms" url="/harm" />
      <MenuLink label="Consequences" url="/consequences" />
      <MenuLink label="Alternatives" url="/alternatives" />
      <MenuLink label="Request Help" url="/request-help" />
    </div>
  </nav>
)

export default DesktopMenu
