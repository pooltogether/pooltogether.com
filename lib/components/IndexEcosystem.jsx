import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import { GridItem } from 'lib/components/GridItem'

import OrangeLogo from 'assets/images/orange@2x.png'

import { ZapperSvg, ZerionSvg } from 'lib/components/SvgComponents'

export const IndexEcosystem = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const { t } = useTranslation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  }

  return (
    <>
      <div className='py-16'>
        <div className='pool-container mx-auto'>
          <h5 className='uppercase text-highlight-1 pb-4'>{t('ecosystem', 'Ecosystem')}:</h5>

          <div className='flex flex-col'>
            <p className='text-sm xs:text-xl sm:text-lg lg:text-xl sm:max-w-2xl'>
              {t(
                'defiPlatformsNeoBanksAndSavings',
                'Decentralized Finance (DeFi) platforms, neobanks and savings customers all working together to win.'
              )}
            </p>

            <motion.div
              className={
                'flex flex-col sm:flex-row sm:flex-wrap mt-12 text-base lg:text-lg -mx-4 lg:-mx-12'
              }
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={containerVariants}
            >
              <GridItem
                altBg
                title={'Zapper'}
                description={t('joinOnZapper', 'Join PoolTogether using this portal to DeFi.')}
                svg={<ZapperSvg />}
                url='https://www.zapper.fi'
                buttonText='Open Zapper'
              />

              <GridItem
                altBg
                title={'Zerion'}
                description={t('joinOnZerion', 'Access DeFi & view your PoolTogether deposits.')}
                svg={<ZerionSvg />}
                url='https://zerion.io/'
                buttonText='Open Zerion'
              />

              <GridItem
                altBg
                title={'Orange'}
                description={t('joinOnOrange', 'Smart L2 wallet focusing on the Polygon network.')}
                img={OrangeLogo}
                url='https://orangewallet.app/'
                buttonText='Open Orange'
              />

              {/* <div className='w-full sm:w-1/3 mx-auto mb-12 sm:mb-12 h-0'>&nbsp;</div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
