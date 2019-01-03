import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/slide'

import './index.scss'

export default class MobileMenu extends Component {
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

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <Menu
        right
        noOverlay
        width={'100%'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          to="/"
          onClick={() => this.closeMenu()}
          activeStyle={{ textDecoration: 'underline' }}
        >
          Home
        </Link>
        <Link
          to="/harm"
          onClick={() => this.closeMenu()}
          activeStyle={{ textDecoration: 'underline' }}
        >
          Harm
        </Link>
        <Link
          to="/consequences"
          onClick={() => this.closeMenu()}
          activeStyle={{ textDecoration: 'underline' }}
        >
          Consequences
        </Link>
        <Link
          to="/alternatives"
          onClick={() => this.closeMenu()}
          activeStyle={{ textDecoration: 'underline' }}
        >
          Alternatives
        </Link>
        <Link
          to="/request-help"
          onClick={() => this.closeMenu()}
          activeStyle={{ textDecoration: 'underline' }}
        >
          Request Help
        </Link>
      </Menu>
    )
  }
}
