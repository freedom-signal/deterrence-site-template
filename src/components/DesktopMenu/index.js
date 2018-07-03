import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url} exact activeStyle={{ textDecoration: 'underline' }}>
      {props.label}
    </Link>
  </div>
)

const DesktopMenu = () => (
  <nav>
    <MenuLink label="Buyer Beware" url="/" aria-label="Home" />
    <div className={styles.rightMenu}>
      <MenuLink label="Harm" url="/harm" />
      <MenuLink label="Consequences" url="/consequences" />
      <MenuLink label="Alternatives" url="/alternatives" />
      <MenuLink label="Contact" url="/contact" />
    </div>
  </nav>
)

export default DesktopMenu
