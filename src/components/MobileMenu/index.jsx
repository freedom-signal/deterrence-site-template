import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/slide'

import './index.scss'

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This is used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <Menu
        right
        width={'100%'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          to="/"
          onClick={() => this.closeMenu()}
          exact
          activeStyle={{ textDecoration: 'underline overline' }}
        >
          HOME
        </Link>
        <Link
          to="/harm"
          onClick={() => this.closeMenu()}
          exact
          activeStyle={{ textDecoration: 'underline overline' }}
        >
          HARM
        </Link>
        <Link
          to="/consequences"
          onClick={() => this.closeMenu()}
          exact
          activeStyle={{ textDecoration: 'underline overline' }}
        >
          CONSEQUENCES
        </Link>
        <Link
          to="/alternatives"
          onClick={() => this.closeMenu()}
          exact
          activeStyle={{ textDecoration: 'underline overline' }}
        >
          ALTERNATIVES
        </Link>
        <Link
          to="/contact"
          onClick={() => this.closeMenu()}
          exact
          activeStyle={{ textDecoration: 'underline overline' }}
        >
          CONTACT
        </Link>
      </Menu>
    )
  }
}

export default MobileMenu
