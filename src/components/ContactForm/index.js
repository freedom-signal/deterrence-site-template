import React from 'react'

import PrimaryButton from '../PrimaryButton'

import styles from './index.module.scss'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
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
    fetch(this.props.webhook, {
      method: 'POST',
      body: JSON.stringify(this.state),
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.contactInput}>
            <i className={styles.inputIcon} />
            <input
              className={styles.emailField}
              name="email"
              onChange={this.handleInputChange}
              placeholder="your email address"
              type="email"
              value={this.state.email}
            />

            <PrimaryButton type="submit">
              Request Confidential Help
            </PrimaryButton>
          </div>
        </form>
      </div>
    )
  }
}
