import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { BoxLinkWithIcon } from 'lib/components/BoxLinkWithIcon'
import { GridItemBrandAssets } from 'lib/components/GridItemBrandAssets'

import PoolTogetherPurpleWordmarkImg from '../../public/images/pooltogether-wordmark--purple-gradient.svg'
import PoolTogetherWhiteMarkImg from '../../public/images/pooltogether-mark--white.svg'
import PoolTogetherTrophyImg from '../../public/images/pooltogether-trophy--detailed.svg'

console.log({ PoolTogetherPurpleWordmarkImg, PoolTogetherWhiteMarkImg, PoolTogetherTrophyImg })

export const BrandAssets = (props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <>
      <div className='content-max-width mx-auto flex flex-col text-base h-full z-10 relative mb-20'>
        <h4 className='my-0 uppercase text-default'>Brand Assets</h4>

        <h2 className='mb-6'>PoolTogether Logos &amp; Usage</h2>

        <p>
          Here is a handy zipped-up package of all the latest logos, wordmarks, and symbols to
          assist you in building PoolTogether integrations or linking to us:
        </p>

        <BoxLinkWithIcon
          isExternal
          href='https://github.com/pooltogether/pooltogether--brand-assets/blob/141936c859553a2a42ac96ed807551b85a4d56d9/pooltogether-brand-assets-v1.2.0.zip?raw=true'
          title='Download brand assets zip package'
          icon={'download'}
        >
          pooltogether-brand-assets-v1.2.0.zip
        </BoxLinkWithIcon>

        <BoxLinkWithIcon
          isExternal
          href='https://www.figma.com/community/file/1212805243917604494'
          title='View our Figma file'
          icon={'link'}
        >
          PoolTogether Brand Kit (Figma)
        </BoxLinkWithIcon>

        <br />

        <h4 className='my-5 uppercase text-default'>By Style</h4>

        <p>
          If you would rather download one or two specific styles you can find them on the{' '}
          <a href='https://github.com/pooltogether/pooltogether--brand-assets'>
            GitHub brand assets repository
          </a>
          .
        </p>

        <div className='my-5'>
          <p className='text-base my-0 text-accent-1'>Examples:</p>

          <motion.div
            className={classnames(
              'flex flex-col xs:flex-row xs:flex-wrap justify-start items-start',
              'mt-2 mb-4 px-4 xs:px-8 rounded-xl -mx-4 lg:-mx-8'
            )}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              },
              hidden: {}
            }}
          >
            <GridItemBrandAssets title={`Purple Wordmark`} src={PoolTogetherPurpleWordmarkImg} />
            <GridItemBrandAssets title={`White Mark`} src={PoolTogetherWhiteMarkImg} />
            <GridItemBrandAssets title={`Trophy`} src={PoolTogetherTrophyImg} />
          </motion.div>
        </div>

        <h4 className='my-5 uppercase text-default'>Usage</h4>

        <p>
          We would like you to use any of the the assets 'as is'. If you need a modified version of
          any of the logos feel free to <a href='mailto:hello@pooltogether.com'>reach out to us</a>{' '}
          and we'll be happy to help.
        </p>

        <p>
          Please do not use any of the PoolTogether assets as the logo or in your logo for your app
          or brand. Thanks!
        </p>
      </div>
    </>
  )
}
