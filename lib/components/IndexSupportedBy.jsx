import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItemSupportedBy } from 'lib/components/GridItemSupportedBy'

import ConsensysSvg from 'assets/images/consensys.svg'
import DTCCapitalSvg from 'assets/images/dtc-capital.svg'
import IdeoSvg from 'assets/images/ideo.svg'
import ParaFiSvg from 'assets/images/parafi-logo.svg'
import MetaCartelSvg from 'assets/images/metacartel-logo.svg'
import TheLaoSvg from 'assets/images/the-lao-logo.svg'
import RobotVenturesSvg from 'assets/images/robot-ventures-logo.svg'

export const IndexSupportedBy = () => {
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
    <div id='backed-by' className='bg-darkened text-center pt-12 pb-6 sm:pt-20 sm:pb-16'>
      <div className='pool-container mx-auto'>
        <h3 className='text-sm xs:text-lg sm:text-xl my-0 sm:mb-12 leading-tight'>
          Protocol supported by
        </h3>

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
            title={'ConsenSys'}
            img={ConsensysSvg}
            url='https://www.consensys.com'
          />

          <GridItemSupportedBy
            title={'IDEO'}
            img={IdeoSvg}
            url='https://www.ideo.com'
            maxHeight={30}
          />

          <GridItemSupportedBy
            title={'DTC Capital'}
            img={DTCCapitalSvg}
            url='https://www.dtc.capital'
          />

          <GridItemSupportedBy title={'ParaFi'} img={ParaFiSvg} url='https://www.parafi.capital/' />

          <GridItemSupportedBy
            title={'MetaCartel Ventures'}
            img={MetaCartelSvg}
            url='https://metacartel.org'
          />

          <GridItemSupportedBy title={'The LAO'} img={TheLaoSvg} url='https://thelao.io' />

          <GridItemSupportedBy
            title={'Robot Ventures'}
            img={RobotVenturesSvg}
            url='https://twitter.com/robotventures'
          />
        </motion.div>

        {/* <div className='flex justify-center items-center sm:-mx-2'>
        <a
          href='https://makerdao.com'
          title='View the Maker site'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={MakerDaoSvg}
            className='mt-4'
          />
        </a>
      </div> */}
      </div>
    </div>
  )
}
