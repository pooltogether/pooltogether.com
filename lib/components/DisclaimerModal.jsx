import React, { useState } from 'react'
import { Modal } from '@pooltogether/react-components'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'

import { atom, useAtom } from 'jotai'

export const disclaimerModalOpenAtom = atom(false)

export const DisclaimerModal = (props) => {
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useAtom(disclaimerModalOpenAtom)
  const [acknowledged, setAcknowleged] = useState(false)

  const closeModal = () => {
    setDisclaimerModalOpen(false)
  }

  const setCookie = () => {
    Cookie.set()
  }

  const redirectTo = () => {
    setCookie()
    setDisclaimerModalOpen(false)
  }

  return (
    <Modal
      isOpen={disclaimerModalOpen}
      paddingClassName='px-2 xs:px-8 py-10'
      maxWidthClassName='sm:max-w-md'
      label={'Disclaimer modal'}
      closeModal={closeModal}
    >
      <label className='mx-auto text-center'>
        <input
          name='acknowleged'
          type='checkbox'
          checked={acknowledged}
          onChange={() => {
            setAcknowleged(!acknowledged)
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
          onClick={redirectTo}
          disabled={!acknowledged}
        >
          Continue
        </SquareButton>
      </div>
    </Modal>
  )
}
