import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url}>
      { props.label }
    </Link>
  </div>
)

const Header = () => (
  <div className={styles.header}>
      <MenuLink label='Home' url='/'></MenuLink>
      <MenuLink label='Page 2' url='/page-2'></MenuLink>
  </div>
)

export default Header
