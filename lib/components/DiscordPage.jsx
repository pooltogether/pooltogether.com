import React, { useState, useRef, useEffect } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  SquareButton,
  SquareButtonTheme,
  SquareButtonSize,
  ThemedClipSpinner
} from '@pooltogether/react-components'

import { axiosInstance } from 'lib/axiosInstance'
import { DiscordIconSvg } from 'lib/components/SvgComponents'

const H_CAPTCHA_SITE_KEY = '11cdabde-af7e-42cb-ba97-76e35b7f7c39' // '10000000-ffff-ffff-ffff-000000000001' test

const DEFAULT_BUTTON_TEXT = 'Get Discord Invite'

export const DiscordPage = () => {
  const [hCaptchaToken, setHCaptchaToken] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [inviteToken, setInviteToken] = useState('')
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT)

  const captchaRef = useRef(null)

  const onSubmit = () => {
    if (!loading) {
      setButtonText(
        <>
          <ThemedClipSpinner size={16} /> Getting Discord invite ...
        </>
      )
      setLoading(true)

      captchaRef.current.execute()
    }
  }

  const onExpire = () => {
    console.log('hCaptcha Token Expired')
    window.location.reload()
  }

  const onError = (err) => {
    setError(`hCaptcha Error: ${err}`)
  }

  useEffect(async () => {
    if (hCaptchaToken) {
      var bodyFormData = new FormData()
      bodyFormData.append('h-captcha-response', hCaptchaToken)

      const response = await axiosInstance({
        method: 'post',
        url: `http://127.0.0.1:8787`,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      console.log(response)
      console.log(response)
      if (response.success) {
        setInviteToken(response.data)
      }
    }
  }, [hCaptchaToken])

  useEffect(() => {
    if (inviteToken) {
      setButtonText('Redirecting ...')
      window.location.href = `https://discord.com/invite/${inviteToken}`
      inviteToken = null
    }
  }, [inviteToken])

  return (
    <div>
      <div className='pool-container mx-auto flex flex-col items-center text-base z-10 relative pt-20'>
        <div className='my-2 text-white hover:text-green w-20'>
          <DiscordIconSvg className='my-auto' />
        </div>

        <h1 className='text-center text-flashy text-4xl sm:text-7xl lg:text-10xl leading-tight mt-4'>
          Join our Discord Community!
        </h1>

        <p className='text-lg lg:text-xl text-center mt-4'>
          Looking for help or just want to hang out with the PoolTogether community? <br />
          Come join us on Discord!
        </p>

        <HCaptcha
          sitekey={H_CAPTCHA_SITE_KEY}
          onVerify={setHCaptchaToken}
          onError={onError}
          onExpire={onExpire}
          ref={captchaRef}
          theme='dark'
          size='invisible'
        />

        <SquareButton
          size={SquareButtonSize.lg}
          theme={SquareButtonTheme.teal}
          className='items-center my-4 block sm:inline'
          onClick={onSubmit}
        >
          {buttonText}
        </SquareButton>

        {error && <div>{error}</div>}

        <div className='text-center text-xs opacity-30 hover:opacity-100 trans mt-32 mx-auto'>
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
