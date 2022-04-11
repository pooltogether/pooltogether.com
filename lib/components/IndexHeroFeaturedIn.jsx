import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import { motion, useAnimation } from 'framer-motion'

import { GridItemSupportedBy } from 'lib/components/GridItemSupportedBy'
import { FortuneSvg, BinanceAcademySvg, CoindeskSvg } from 'lib/components/SvgComponents'

// img={ZapperFiSvg}
// url='https://learn.zapper.fi/articles/how-to-tranfer-eth-from-coinbase-to-defi'

// title={'Ethereum.org'}
// img={EthereumPng}
// url='https://ethereum.org/en/dapps/'

// title={'Bankless'}
// url='https://shows.banklesshq.com/p/early-access-meet-the-nation-pooltogether'

export const IndexHeroFeaturedIn = () => {
  const { t } = useTranslation()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    },
    hidden: {}
  }

  return (
    <div id='featured-in' className='text-center w-full' style={{ paddingBottom: '2vh' }}>
      <div className='pool-container mx-auto'>
        <div className='text-default text-sm font-black mt-12 sm:mt-0 mb-4 uppercase'>
          {t('featuredIn', 'Featured in')}
        </div>

        <motion.div
          className={classnames(
            'flex flex-col-reverse xs:flex-row xs:flex-wrap justify-center items-center xs:items-start',
            'mt-2 mb-4'
          )}
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={containerVariants}
        >
          <GridItemSupportedBy
            altBg
            title={'Binance Academy site'}
            img={<BinanceAcademySvg />}
            url='https://academy.binance.com/en/articles/how-pool-together-turns-saving-money-into-a-game'
            className='-mr-2 sm:mr-12'
            heightClassName='h-14'
          />

          <GridItemSupportedBy
            altBg
            title={'Fortune Magazine site'}
            img={<FortuneSvg />}
            url='https://fortune.com/longform/decentralized-finance-crypto-wall-street'
            className='mt-1'
          />

          <GridItemSupportedBy
            altBg
            title={'CoinDesk site'}
            img={<CoindeskSvg />}
            url='https://old.coindesk.com/tag/pooltogether'
            className='mt-1 ml-3 sm:ml-12'
          />
        </motion.div>
      </div>
    </div>
  )
}
