import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/slide'

import './index.scss'

class MobileMenu extends Component {
  render() {
    return (
      <Menu right width={'100%'}>
        <Link to="/">HOME</Link>
        <Link to="/harm">HARM</Link>
        <Link to="/consequences">CONSEQUENCES</Link>
        <Link to="/alternatives">ALTERNATIVES</Link>
        <Link to="/contact">CONTACT</Link>
      </Menu>
    )
  }
}

export default MobileMenu
