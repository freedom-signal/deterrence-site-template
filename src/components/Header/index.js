import React from 'react';
import Link from 'gatsby-link';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

import styles from './index.module.scss';

const MenuLink = props => (
  <div className={styles.menuLink}>
    <Link to={props.url}>
      { props.label }
    </Link>
  </div>
)

const Header = () => (
  <div className={styles.header}>
    <nav>
      <MediaQuery query="(max-width: 650px)">
        <div>hi</div>
      </MediaQuery>
   
      <MediaQuery query="(min-width: 651px)">
        <div>hello</div>
        {/* <MenuLink label='Buyer Beware' url='/' aria-label='Home' className={styles.siteTitle}></MenuLink>
        <div className={styles.rightMenu}>
          <MenuLink label='Harm' url='/harm'></MenuLink>
          <MenuLink label='Consequences' url='/consequences'></MenuLink>
          <MenuLink label='Alternatives' url='/alternatives'></MenuLink>
          <MenuLink label='Contact' url='/contact'></MenuLink>
        </div> */}
      </MediaQuery>
    </nav>
  </div>
)

export default Header
