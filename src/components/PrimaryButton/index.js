import React from 'react'

import styles from './index.module.scss'

export default class PrimaryButton extends React.Component {
  constructor(props) {
    super(props)
    this.label = props.children
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // fbq('trackCustom', 'Button Follow', { label: this.label })
  }

  render() {
    return (
      <button className={styles.primaryButton} onClick={this.handleClick}>
        {this.label}
      </button>
    )
  }
}
