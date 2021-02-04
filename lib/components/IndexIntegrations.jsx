import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { ButtonLink } from 'lib/components/ButtonLink'
import { GridItem } from 'lib/components/GridItem'

// import CircleSvg from 'assets/images/circle.svg'
// import MakerSvg from 'assets/images/maker.svg'
import ArgentSvg from 'assets/images/argent.svg'
import BotSvg from 'assets/images/logo-ttbot@2x.png'
import EBOSvg from 'assets/images/ebo.svg'
import PillarSvg from 'assets/images/pillar.svg'
import ZerionSvg from 'assets/images/zerion.svg'
import ZapperFiSvg from 'assets/images/zapperfi.svg'

import ProtocolSvg from 'assets/images/pro-art-protocol@2x.jpg'

export const IndexIntegrations = () => {
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
        staggerChildren: 0.2
      }
    },
    hidden: {
    },
  }

  return <>
    <div className='bg-secondary'>
      <div className='pool-container mx-auto py-8 sm:py-24'>

        <div className='flex items-center justify-between'>
          <h1
            className='w-1/2 sm:w-1/3 leading-10 sm:leading-tight'
          >
            Protocol <span
              className='text-flashy -mt-2 '
              style={{ display: 'block' }}
            >Integrations</span>
          </h1>

          <div className='w-16 sm:w-32'>
            <img
              src={ProtocolSvg}
              className='max-w-full'
            />
          </div>
        </div>


        <div className='flex flex-col items-center rounded-lg bg-darkened p-4 py-12 sm:p-10 mt-8'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Try community-built interfaces
          </h3>
          <div
            className='font-normal font-number sm:w-1/2 text-center text-xs sm:text-sm px-4'
          >
            Get inspired by what you can build on the PoolTogether protocol
          </div>



          <motion.div
            className={classnames(
              'flex flex-col lg:flex-row lg:flex-wrap',
              'mt-8 mb-4 px-2 lg:px-0 -mx-4 rounded-xl text-base lg:text-lg',
            )}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={containerVariants}
          >
            <GridItem
              title={'Argent'}
              description={`Use the Argent app to join the pool.`}
              img={ArgentSvg}
              url='https://www.argent.xyz/'
            />

            <GridItem
              title={'Pillar'}
              description={`Pillar Wallet makes it simple to use PoolTogether.`}
              img={PillarSvg}
              url='https://pillarproject.io'
            />

            <GridItem
              title={'ZapperFi'}
              description={`A great dashboard to track your tickets & odds of winning.`}
              img={ZapperFiSvg}
              url='https://www.zapper.fi/#/dashboard'
            />

            <GridItem
              title={'Zerion'}
              description={`A simple interface to access DeFi to invest in PoolTogether.`}
              img={ZerionSvg}
              url='https://zerion.io/'
            />

            <GridItem
              title={'PT Twitter Bot'}
              description={`A bot that updates on every join or win of the Dai pool.`}
              img={BotSvg}
              url='https://twitter.com/PoolTogetherBot'
              attribution={`bot by Sophia Bai from the Noun Project`}
              imgStyle={{ width: 39, height: 34 }}
            />

            <GridItem
              title={'EBO'}
              description={`EBO Finance is a wallet app for joining the pool.`}
              img={EBOSvg}
              url='https://ebo.io/'
            />

          </motion.div>
        </div>


        <div className='flex flex-col items-center rounded-lg bg-darkened p-4 py-12 sm:p-10 mt-12'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Try community-built interfaces
          </h3>
          <div
            className='font-normal font-number sm:w-1/2 text-center text-xs sm:text-sm px-4'
          >
            Learn about the PoolTogether protocol and emerging use cases
          </div>

          <ButtonLink
            href='https://docs.pooltogether.com'
            as='https://docs.pooltogether.com'
            className='mt-8'
          >
            Go to docs
          </ButtonLink>
        </div>


      </div>
    </div>
  </>
}
