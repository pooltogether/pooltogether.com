import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItemSupportedBy } from 'lib/components/GridItemSupportedBy'

import BinanceAcademySvg from 'assets/images/binance-academy.svg'
import EthereumPng from 'assets/images/ethereum-org.png'
import BanklessPng from 'assets/images/bankless.png'
import CoinDeskPng from 'assets/images/coindesk.png'

export const IndexHeroFeaturedIn = () => {
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
    <div id='featured-in' className='text-center pt-10'>
      <div className='pool-container mx-auto'>
        <h5 className='my-0 sm:mt-4 leading-tight'>Featured in:</h5>

        <motion.div
          className={classnames(
            'flex flex-col xs:flex-row xs:flex-wrap justify-start items-start',
            'mt-2 mb-4 px-4 xs:px-8 rounded-xl -mx-4 sm:-mx-12 lg:-mx-16'
          )}
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={containerVariants}
        >
          <GridItemSupportedBy
            altBg
            title={'Binance Academy'}
            img={BinanceAcademySvg}
            url='https://academy.binance.com/en/articles/how-pool-together-turns-saving-money-into-a-game'
          />

          <GridItemSupportedBy
            altBg
            title={'Ethereum.org'}
            img={EthereumPng}
            url='https://ethereum.org/en/dapps/'
          />

          <GridItemSupportedBy
            altBg
            title={'Bankless'}
            img={BanklessPng}
            url='https://shows.banklesshq.com/p/early-access-meet-the-nation-pooltogether'
          />

          <GridItemSupportedBy
            altBg
            title={'CoinDesk'}
            img={CoinDeskPng}
            url='https://www.coindesk.com/tag/pooltogether'
          />
        </motion.div>
      </div>
    </div>
  )
}
