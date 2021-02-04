import React, { Component } from 'react'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'

import { Input } from 'lib/components/Input'
import { Button } from 'lib/components/Button'
import { withEmailSignup } from 'lib/components/hocs/withEmailSignup'

export const EmailSignup = withEmailSignup(class _EmailSignup extends Component {
  render() {
    let {
      flexWrapperClasses,
      successMessage,
      successTextClass,
    } = this.props

    successMessage = successMessage || <>
      Superb.
      <br /> You will receive a weekly update when prizes are drawn!
    </>
    successTextClass = successTextClass || `text-black`

    const list = this.props.listId

    return <>
      <div className='flex flex-col items-center justify-center h-full'>
        <form
          onSubmit={this.props.handleSubmit}
          className={classnames(
            'w-full sm:w-3/4 email-signup-animated',
            {
              hidden: this.props.success
            }
          )
          }>

          <div className={`sm:flex ${flexWrapperClasses}`}>
            <Input
              id='email'
              type='email'
              placeholder='Your email address ...'
              className='input w-full'
              rounded='rounded-lg sm:rounded-r-none'
              value={this.props.email}
              onChange={this.props.handleEmailChange}
            />

            <Button
              noAnim
              height='sm:h-16 lg:h-20'
              className='w-full sm:w-1/3 lg:w-1/2'
              rounded='lg sm:rounded-l-none'
            >
              Sign me up!
            </Button>
          </div>
        </form>

        <div
          className={classnames(
            'email-signup-animated',
            'email-signup-success-message',
            'has-text-centered',
            {
              hidden: !this.props.success
            }
          )
          }>
          <div className={`${successTextClass} text-sm lg:text-lg my-2 text-center m-auto`}>
            <FeatherIcon
              icon='send'
              className='m-auto mb-2 text-green fill-green w-8 h-8'
            />
            {successMessage}
          </div>
        </div>
      </div>
    </>
  }

})
