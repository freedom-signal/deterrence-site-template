import React from 'react'

import PrimaryButton from '../PrimaryButton'

import styles from './index.module.scss'

export default class GetHelpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fbq('track', 'Contact');
    fetch(this.props.webhook, {
      method: 'POST',
      body: JSON.stringify(this.state),
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>email</label>
          <div className={styles.inputWrapper}>
            <i className={styles.envelope} />
            <input
              className={styles.emailField}
              name="email"
              onChange={this.handleInputChange}
              placeholder="your email address"
              type="email"
              value={this.state.email}
            />
          </div>

          <PrimaryButton type="submit">Request Confidential Help</PrimaryButton>
        </form>
      </div>
    )
  }
}
