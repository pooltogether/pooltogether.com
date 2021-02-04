import React, { Component } from 'react'

import { axiosInstance } from 'lib/axiosInstance'
import { poolToast } from 'lib/utils/poolToast'

export function withEmailSignup(WrappedComponent) {

  return class _withEmailSignup extends Component {
    getInitialState = () => {
      return {
        email: '',
        success: false
      }
    }

    state = this.getInitialState()

    handleEmailChange = (e) => {
      this.setState({
        email: e.target.value
      })
    }

    handleSubmit = async (e) => {
      e.preventDefault()

      if (this.state.email === '') {
        poolToast.error('Please enter a valid email address')
        return
      }

      const hostPortAndPath = `/.netlify/functions/mailchimp-signup`

      let response

      try {
        const {
          listId
        } = this.props

        if (!listId) {
          throw new Error('No listId supplied in props')
        }

        response = await axiosInstance.post(hostPortAndPath, {
          email: this.state.email,
          listId
        })

        if (response.status === 201) {
          this.setState({
            success: true
          })
        }
      } catch (error) {
        console.error(error.message)
        poolToast.error('There was an issue subscribing you (possibly invalid email?)')
      }
    }

    render() {
      return <WrappedComponent
        {...this.props}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        success={this.state.success}
      />
    }
  }
}
