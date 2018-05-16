import React from 'react';
import MediaQuery from 'react-responsive';
import Menu from 'react-burger-menu/lib/menus/slide';

import styles from './index.module.scss';
import DesktopMenu from '../DesktopMenu/index.js'



const Header = () => (
  <div className={styles.header}>
    <MediaQuery query="(max-width: 650px)">
      <div>hi</div>
    </MediaQuery>
   
    <MediaQuery query="(min-width: 651px)">
      <DesktopMenu> </DesktopMenu>
    </MediaQuery>
  </div>
)

export default Header
