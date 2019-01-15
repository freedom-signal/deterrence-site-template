import React from 'react'

import trackWithPixel from '../../utils/trackWithPixel'

import styles from './index.module.scss'

export default class PrimaryButton extends React.Component {
  constructor(props) {
    super(props)
    this.label = props.children
    this.href = props.href
  }

  handleClick = () => {
    trackWithPixel('trackCustom', 'Button Follow', { label: this.label })

    if (this.href !== undefined) {
      window.location.href = this.href
    }
  }

  render() {
    return (
      <button className={styles.primaryButton} onClick={this.handleClick}>
        {this.label}
      </button>
    )
  }
}
