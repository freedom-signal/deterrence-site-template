import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.scss'

const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url}>
      { props.label }
    </Link>
  </div>
)

const Header = () => (
  <div className={styles.header}>
    <div className={styles.siteTitle}>
      <Link to='/'>Buyer Beware</Link>
    </div>

    <div className={styles.headerMenu}>
      <MenuLink label='Harm' url='/harm'></MenuLink>
      <MenuLink label='Consequences' url='/consequences'></MenuLink>
      <MenuLink label='Alternatives' url='/alternatives'></MenuLink>
    </div>
  </div>
)

export default Header
