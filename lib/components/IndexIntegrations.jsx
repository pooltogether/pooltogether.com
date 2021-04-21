import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { ButtonLink } from 'lib/components/ButtonLink'
import { GridItem } from 'lib/components/GridItem'

import BotSvg from 'assets/images/logo-ttbot@2x.png'
import DharmaSvg from 'assets/images/dharma-logo.png'
import ZerionSvg from 'assets/images/zerion.svg'
import ZapperFiSvg from 'assets/images/zapperfi.svg'

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
    hidden: {}
  }

  return (
    <>
      <div className='bg-secondary'>
        <div className='pool-container mx-auto py-8 sm:py-24'>
          <div className='lg:px-20'>
            <div className='flex items-center justify-between'>
              <h1 className='leading-10 sm:leading-tight'>
                <div className='text-flashy'>Protocol</div>{' '}
                <div className='block -mt-2'>Integrations</div>
              </h1>
            </div>

            <div className='flex flex-col py-4'>
              <p className='text-sm xs:text-xl sm:text-xl lg:text-3xl lg:max-w-3xl'>
                Try community-built interfaces and get inspired by what you can build on the
                PoolTogether protocol.
              </p>

              <motion.div
                className={classnames(
                  'flex flex-col sm:flex-row sm:flex-wrap',
                  'mt-8 mb-4 -mx-4 rounded-xl text-base lg:text-lg'
                )}
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={containerVariants}
              >
                {/* <GridItem
                title={'Argent'}
                description={`Use the Argent app to join the pool.`}
                img={ArgentSvg}
                url='https://www.argent.xyz/'
              /> */}

                <GridItem
                  title={'Dharma'}
                  description={`Dharma Wallet enables deposits from your US bank into PoolTogether.`}
                  img={DharmaSvg}
                  url='https://www.dharma.io/'
                />

                <GridItem
                  title={'ZapperFi'}
                  description={`A great dashboard to deposit and track your assets and POOL you're earning.`}
                  img={ZapperFiSvg}
                  url='https://www.zapper.fi/#/dashboard'
                />

                <GridItem
                  title={'Zerion'}
                  description={`Another great way to access DeFi and view your PoolTogether deposits and earnings.`}
                  img={ZerionSvg}
                  url='https://zerion.io/'
                />

                <GridItem
                  title={'PT Twitter Bot'}
                  description={`A bot that updates each time someone joins or wins a pool.`}
                  img={BotSvg}
                  url='https://twitter.com/PoolTogetherBot'
                  attribution={`bot icon by Sophia Bai from the Noun Project`}
                  imgStyle={{ width: 39, height: 34 }}
                />
                {/* 
              <GridItem
                title={'EBO'}
                description={`EBO Finance is a wallet app for joining the pool.`}
                img={EBOSvg}
                url='https://ebo.io/'
              /> */}
              </motion.div>
            </div>
          </div>

          <div className='bg-card rounded-xl mx-auto text-center p-4 xs:p-12 sm:pt-12 sm:pb-12'>
            <div className='flex flex-col items-center'>
              <h2 className='mt-4 mb-8 text-center'>Check out our developer documentation</h2>
              <p className='text-sm xs:text-lg sm:text-xl max-w-lg text-center'>
                Learn about the PoolTogether protocol and emerging use cases
              </p>

              <ButtonLink
                secondary
                textSize='2xl'
                href='https://docs.pooltogether.com'
                as='https://docs.pooltogether.com'
                className='my-8 w-3/4 sm:w-1/2'
              >
                Go to docs
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
