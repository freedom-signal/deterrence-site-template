import React from 'react';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

import styles from './index.module.scss';
import DesktopMenu from '../DesktopMenu/index.js'



const Header = () => (
  <div className={styles.header}>
    <nav>
      <MediaQuery query="(max-width: 650px)">
        <div>hi</div>
      </MediaQuery>
   
      <MediaQuery query="(min-width: 651px)">
        <DesktopMenu> </DesktopMenu>
      </MediaQuery>
    </nav>
  </div>
)

export default Header
