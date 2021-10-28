import React, { useState, useRef, useEffect } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  SquareButton,
  SquareButtonTheme,
  SquareButtonSize,
  ThemedClipSpinner
} from '@pooltogether/react-components'

import { DiscordIconSvg } from 'lib/components/SvgComponents'

const DEFAULT_BUTTON_TEXT = 'Get Discord Invite'

export const DiscordPage = () => {
  const [token, setToken] = useState(null)
  const [error, setError] = useState('')
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT)

  const captchaRef = useRef(null)

  const onSubmit = () => {
    setButtonText(
      <>
        <ThemedClipSpinner size={12} /> Getting Discord invite ...
      </>
    )

    captchaRef.current.execute()
  }

  const onExpire = () => {
    console.log('hCaptcha Token Expired')
    window.location.reload()
  }

  const onError = (err) => {
    setError(`hCaptcha Error: ${err}`)
  }

  useEffect(() => {
    if (token) {
      console.log(token)
      console.log(`hCaptcha Token: ${token}`)
    }
  }, [token])

  useEffect(() => {
    if (inviteToken) {
      setButtonText('Redirecting ...')
      window.location.href = `https://discord.com/invite/${inviteToken}`
      inviteToken = null
    }
  }, [inviteToken])

  return (
    <div>
      <div className='pool-container mx-auto flex flex-col items-center text-base h-full z-10 relative pt-20'>
        <div className='my-2 text-white hover:text-green w-10'>
          <DiscordIconSvg className='my-auto' />
        </div>

        <h1 className='text-center text-flashy text-4xl sm:text-7xl lg:text-10xl'>
          Join our Discord Community!
        </h1>

        <p>
          Looking for help, or want to hangout with the Zapper community? Click on the following
          button to join.
        </p>

        <HCaptcha
          sitekey='10000000-ffff-ffff-ffff-000000000001'
          onVerify={setToken}
          onError={onError}
          onExpire={onExpire}
          ref={captchaRef}
          theme='dark'
          size='invisible'
        />

        <SquareButton
          size={SquareButtonSize.md}
          theme={SquareButtonTheme.tealOutline}
          className='items-center my-4 block sm:inline'
          onClick={onSubmit}
        >
          {buttonText}
        </SquareButton>

        {error && <div>{error}</div>}

        <div className='text-xs opacity-30 hover:opacity-100 trans mt-32 mx-auto'>
          This site is protected by hCaptcha and its{' '}
          <a target='_blank' className='text-xs' href='https://hcaptcha.com/privacy'>
            Privacy Policy
          </a>{' '}
          and
          <a target='_blank' className='text-xs' href='https://hcaptcha.com/terms'>
            Terms of Service
          </a>{' '}
          apply.
        </div>
      </div>
    </div>
  )
}
