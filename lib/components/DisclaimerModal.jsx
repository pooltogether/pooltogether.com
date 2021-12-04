import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Modal } from '@pooltogether/react-components'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'
import { atom, useAtom } from 'jotai'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import { IpfsLogo } from 'lib/components/SvgComponents'

export const disclaimerModalOpenAtom = atom(false)

const getCookieOptions = () => {
  let domain = 'localhost'
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    domain = `.${window.location.hostname}`
  }

  return {
    // secure: domain === '.pooltogether.com',
    domain
  }
}

const cookieKey = 'disclaimerAccepted'

export const DisclaimerModal = (props) => {
  const router = useRouter()

  const [disclaimerModalOpen, setDisclaimerModalOpen] = useAtom(disclaimerModalOpenAtom)
  const [acknowledgedChecked, setAcknowlegedChecked] = useState(false)
  const [modalActuallyOpen, setModalActuallyOpen] = useState(false)

  const cookieOptions = getCookieOptions()

  const redirectToApp = () => {
    router.push('https://app.pooltogether.com')
  }

  useEffect(() => {
    if (disclaimerModalOpen) {
      if (Cookies.get(cookieKey, cookieOptions)) {
        redirectToApp()
      } else {
        // create another state var ...
        setModalActuallyOpen(true)
      }
    }
  }, [disclaimerModalOpen])

  const closeModal = () => {
    setModalActuallyOpen(false)
    setDisclaimerModalOpen(false)
    setAcknowlegedChecked(false)
  }

  const setCookie = () => {
    Cookies.set(cookieKey, 'true', cookieOptions)
  }

  const startRedirect = () => {
    setCookie()
    redirectToApp()
  }

  return (
    <Modal
      isOpen={modalActuallyOpen}
      paddingClassName='px-4 xs:px-12 py-10'
      maxWidthClassName='sm:max-w-lg'
      className='text-white'
      label={'Disclaimer modal'}
      closeModal={closeModal}
    >
      <div className='flex items-center justify-center'>
        <div className='w-16 xs:w-40'>
          <HeaderLogo />
        </div>{' '}
        <div className='text-white text-2xl mr-2 sm:ml-4'>&amp;</div>
        <IpfsLogo />
      </div>
      <h6 className='mt-10 mb-2'>Disclaimer</h6>
      <p className='text-sm'>
        You are leaving pooltogether.com and are being redirected to the 3rd-party community
        deployed and maintained instance of the open source PoolTogether frontend, hosted and served
        on the distributed, peer-to-peer file network known as IPFS.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center mt-4'>
        <label className='mx-auto text-center text-lg sm:ml-0 mt-2'>
          <input
            name='acknowleged'
            type='checkbox'
            checked={acknowledgedChecked}
            onChange={() => {
              setAcknowlegedChecked(!acknowledgedChecked)
            }}
          />{' '}
          I acknowledge &amp; agree
        </label>

        <div className='text-center sm:text-right'>
          <SquareButton
            chevron
            size={SquareButtonSize.md}
            theme={SquareButtonTheme.teal}
            className='max-w-md mt-2'
            onClick={startRedirect}
            disabled={!acknowledgedChecked}
          >
            Continue
          </SquareButton>
        </div>
      </div>
    </Modal>
  )
}
