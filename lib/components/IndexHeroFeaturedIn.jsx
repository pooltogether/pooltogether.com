import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
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
      {/* lol, if you remove this then the SVGs render clipped ... wtf? */}
      <div className='hidden'>
        <CoindeskSvg />
      </div>
      {/* end lol */}

      <div className='pool-container mx-auto'>
        <div className='text-default text-xs font-semibold mb-4 uppercase'>Featured in</div>

        <motion.div
          className={classnames(
            'flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start',
            'mt-2 mb-4 px-4 sm:px-8 rounded-xl -mx-4 sm:-mx-12 lg:-mx-16'
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
            className='sm:ml-2 sm:-mr-2'
          />

          <GridItemSupportedBy
            altBg
            title={'Fortune Magazine site'}
            img={<FortuneSvg />}
            url='https://fortune.com/longform/decentralized-finance-crypto-wall-street'
          />

          <GridItemSupportedBy
            altBg
            title={'CoinDesk site'}
            img={<CoindeskSvg />}
            url='https://old.coindesk.com/tag/pooltogether'
          />
        </motion.div>
      </div>
    </div>
  )
}
