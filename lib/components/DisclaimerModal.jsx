import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Modal } from '@pooltogether/react-components'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'

import { atom, useAtom } from 'jotai'

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
      paddingClassName='px-2 xs:px-8 py-10'
      maxWidthClassName='sm:max-w-md'
      label={'Disclaimer modal'}
      closeModal={closeModal}
    >
      <label className='mx-auto text-center'>
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

      {/* <a
        className={classnames(
          'font-titillium inline-flex items-center justify-center capitalize tracking-wider outline-none focus:outline-none active:outline-none',
          'hover:bg-default rounded-full border-2 border-highlight-2 px-10 py-1 trans trans-fast text-sm lg:text-lg font-semibold'
        )}
      >
        {t('app')}
      </a> */}

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
    </Modal>
  )
}
