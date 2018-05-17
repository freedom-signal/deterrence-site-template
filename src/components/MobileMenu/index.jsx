import React, {Component} from 'react';
import Link from 'gatsby-link';
import Menu from 'react-burger-menu/lib/menus/slide';

import './index.scss';


class MobileMenu extends Component {
  render() {
    return (
      <Menu right width={ '100%' } >
        <Link to='/'>Home</Link>
        <Link to='/harm'>Harm</Link>
        <Link to='/consequences'>Consequences</Link>
        <Link to='/alternatives'>Alternatives</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
    );
  }
}

export default MobileMenu;