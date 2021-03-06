import React from 'react'

import { useTranslation } from 'next-i18next'

export const Tagline = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <div className='text-accent-1 text-center text-base sm:text-lg lg:text-xl mt-12 opacity-60 pb-40'>
        {t('theMoreYouPoolTagline')}
      </div>
    </>
  )
}
