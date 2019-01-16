import React from 'react'

import PrimaryButton from '../PrimaryButton'

import styles from './index.module.scss'
import trackWithPixel from '../../utils/trackWithPixel'

export default class GetHelpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailSent: false,
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

    trackWithPixel('track', 'Contact')

    fetch(this.props.webhook, {
      method: 'POST',
      body: JSON.stringify(this.state.email),
    })

    this.setState({
      emailSent: true,
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
          <FormButton
            emailSent={this.state.emailSent}
            emailEntered={this.state.email}
          />
        </form>
      </div>
    )
  }
}

function FormButton(props) {
  if (props.emailSent === true) {
    return <ConfirmationButton />
  }
  return <SendEmailButton emailEntered={props.emailEntered} />
}

function ConfirmationButton(props) {
  return <h4 className={styles.confirmation}>✅ Email sent.</h4>
}

function SendEmailButton(props) {
  return (
    <div className={props.emailEntered ? 'active' : styles.inactive}>
      <PrimaryButton type="submit">Request Confidential Help</PrimaryButton>
    </div>
  )
}
