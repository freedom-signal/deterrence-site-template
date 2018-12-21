import React from 'react';
import MediaQuery from 'react-responsive';

import styles from './index.module.scss';
import DesktopMenu from '../DesktopMenu/index.js'
import MobileMenu from '../MobileMenu/index.jsx'


const Header = () => (
  <div className={styles.header}>
    <MediaQuery query="(max-width: 650px)">
      <MobileMenu> </MobileMenu>
    </MediaQuery>
   
    <MediaQuery query="(min-width: 651px)">
      <DesktopMenu> </DesktopMenu>
    </MediaQuery>
  </div>
)

export default Header
