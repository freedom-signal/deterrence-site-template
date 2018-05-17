import React from 'react';
import Link from 'gatsby-link';

import styles from './index.module.scss';


const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url}>
      { props.label }
    </Link>
  </div>
)

const DesktopMenu = () => (
  <nav>
    <MenuLink label='Buyer Beware' url='/' aria-label='Home' className={styles.siteTitle}></MenuLink>
    <div className={styles.rightMenu}>
      <MenuLink label='Harm' url='/harm'></MenuLink>
      <MenuLink label='Consequences' url='/consequences'></MenuLink>
      <MenuLink label='Alternatives' url='/alternatives'></MenuLink>
      <MenuLink label='Contact' url='/contact'></MenuLink>
    </div>
  </nav>
)

export default DesktopMenu