import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

import GithubLogo from 'assets/images/github-logo.svg'
import DiscordLogo from 'assets/images/discord-logo.svg'
import TwitterLogo from 'assets/images/twitter-logo.svg'

import Squiggle from 'assets/images/squiggle.svg'
import SquiggleMobile from 'assets/images/squiggle-mobile.svg'

export const IndexHero = (props) => {
  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return (
    <>
      <div className='relative'>
        <div className='pool-container flex flex-col sm:flex-row justify-between mt-24 mx-auto'>
          <div className='relative w-full sm:w-5/12 mt-6'>
            <span
              className='font-medium font-inter text-4xl lg:text-6xl text-new-gradient'
              style={{ lineHeight: 1.125 }}
            >
              Win by saving with PoolTogether.
            </span>
            <p className='text-accent-1 text-lg mt-4'>
              PoolTogether is a crypto-powered savings protocol based on{' '}
              <a
                href='https://en.wikipedia.org/wiki/Premium_Bond'
                target='_blank'
                title='Wikipedia entry for Premium Bonds'
              >
                Premium Bonds
              </a>
              . Save your money and have a chance to win prizes every week.
            </p>
            <p className='text-xl mt-8'>The more you save, the more you win!</p>
            <div className='mt-4' style={{ width: 446 }}>
              <a
                href='https://app.pooltogether.com'
                className='new-btn block text-center text-xl w-full capitalize text-xs px-2 py-2 mt-2'
              >
                Start saving & winning{' '}
                <FeatherIcon icon={'chevron-right'} className='inline-block w-6 h-6 -mt-1' />
              </a>
            </div>

            <ul className='flex mt-2'>
              <HeroSocialItem width={23} href='https://twitter.com/PoolTogether_'>
                <TwitterIconSvg />
              </HeroSocialItem>

              <HeroSocialItem width={18} href='https://discord.gg/hxPhPDW'>
                <DiscordIconSvg />
              </HeroSocialItem>

              <HeroSocialItem width={19} href='https://github.com/pooltogether'>
                <GithubIconSvg />
              </HeroSocialItem>
            </ul>
          </div>

          <div className='w-full sm:w-1/2'>
            <div className='bg-prize-amount text-center pt-8'>
              <h1 className='text-9xl'>
                <WeeklyPrizeAmount />
              </h1>
              <div className='uppercase font-semibold text-default -mt-2'>In weekly prizes</div>
              {/* Awarded every Thursday! */}
            </div>
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <div className='pool-container text-center relative flex flex-col sm:flex-row mt-10 mb-16 sm:my-20 mx-auto'>
          <div className='bg-card rounded-xl mx-auto w-full sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'>
            <h1 className='text-center'>PoolTogether</h1>

            <img src={Squiggle} className='hidden xs:block mx-auto my-4' />
            <img src={SquiggleMobile} className='xs:hidden mx-auto my-4' />

            <div className='text-xs sm:text-2xl text-center mt-7'>
              is an open source and decentralized
              <br /> protocol for no-loss prize games
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HeroSocialItem = (props) => {
  const linkListItemClassName = 'mt-4 mr-5'
  const linkClassName = 'trans trans-fast no-underline text-default-soft'

  return (
    <li
      className={classnames(props.className, linkListItemClassName)}
      style={{ width: props.width }}
    >
      <a href={props.href} className={linkClassName}>
        {props.children}
        {/* <img alt={`${props.children} icon`} src={props.iconSrc} className='mr-5 w-5' /> */}
      </a>
    </li>
  )
}

const BinanceAcademySvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      height='100%'
      viewBox='0 0 148 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#prefix__clip0)'>
        <path d='M53.03 18.504h-6.91V4.148h6.76c2.978 0 4.795 1.47 4.795 3.707v.029c0 1.618-.864 2.53-1.906 3.089 1.667.647 2.71 1.588 2.71 3.53v.03c0 2.676-2.144 3.97-5.45 3.97zm1.458-10.09c0-.942-.744-1.471-2.084-1.471h-3.157v3.03h2.948c1.4 0 2.293-.442 2.293-1.53v-.03zm.804 5.736c0-.97-.714-1.56-2.352-1.56h-3.693v3.149h3.812c1.4 0 2.263-.5 2.263-1.56v-.029h-.03zm6.7 4.354V4.148h3.187v14.356h-3.186zm17.66 0l-7.028-9.12v9.12h-3.157V4.148h2.948l6.82 8.855V4.148h3.157v14.356h-2.74zm17.093 0l-1.34-3.207h-6.134l-1.34 3.207h-3.246L90.908 4.03h2.949l6.224 14.474h-3.336zm-4.407-10.65l-1.936 4.648h3.871l-1.935-4.647zm20.28 10.65l-7.028-9.12v9.12h-3.157V4.148h2.948l6.82 8.855V4.148h3.156v14.356h-2.739zm13.251.264c-4.288 0-7.444-3.265-7.444-7.383v-.03c0-4.089 3.126-7.413 7.594-7.413 2.739 0 4.377.912 5.717 2.206l-2.025 2.324c-1.132-1-2.263-1.618-3.722-1.618-2.442 0-4.23 2-4.23 4.472v.03c0 2.47 1.728 4.5 4.23 4.5 1.667 0 2.68-.647 3.811-1.677l2.025 2.03c-1.489 1.56-3.127 2.56-5.956 2.56zm8.547-.264V4.148h10.959v2.824h-7.773v2.912h6.85v2.824h-6.85v3.001h7.892v2.824h-11.078v-.03zM77.269 32.86h-1.905l-1.043-2.442h-4.854l-1.072 2.442H66.55l4.526-10.238h1.668l4.526 10.238zm-5.39-8.09l-1.756 4.06h3.543l-1.787-4.06zm11.763 8.266c-3.007 0-5.24-2.294-5.24-5.236 0-2.913 2.203-5.266 5.3-5.266 1.906 0 3.037.647 4.02 1.589l-1.161 1.323c-.834-.764-1.698-1.265-2.889-1.265-1.965 0-3.395 1.589-3.395 3.59 0 2 1.43 3.618 3.395 3.618 1.25 0 2.085-.5 2.948-1.324l1.162 1.147c-1.013 1.118-2.204 1.824-4.14 1.824zm16.439-.176h-1.906l-1.043-2.442h-4.854l-1.072 2.442H89.36l4.526-10.238h1.668l4.527 10.238zm-5.39-8.09l-1.758 4.06h3.544l-1.787-4.06zm11.465 8.09h-3.842V22.68h3.842c3.245 0 5.479 2.206 5.479 5.06-.03 2.912-2.263 5.119-5.479 5.119zm0-8.531h-2.025v6.913h2.025c2.173 0 3.573-1.442 3.573-3.442s-1.429-3.471-3.573-3.471zm15.812-.03h-5.807v2.648h5.152v1.588h-5.152v2.736h5.897v1.589h-7.713V22.68h7.623V24.3zm7.892 6.06h-.06l-3.216-4.766v7.267h-1.786V22.68h1.935l3.127 4.795 3.126-4.795h1.937V32.86h-1.817v-7.296l-3.246 4.795zm13.103 2.5h-1.817v-4l-4.08-6.149h2.145l2.888 4.502 2.919-4.502h2.084l-4.08 6.12v4.03h-.059zm-80.017-5.912H46.12v1.706h16.826v-1.706zM4.34 14.327L.111 18.503 4.34 22.68l4.229-4.177-4.229-4.178zm14.532-5.972l7.266 7.178 4.23-4.178L18.871 0 7.377 11.355l4.23 4.178 7.265-7.178zm14.533 5.971l-4.229 4.178 4.229 4.177 4.228-4.177-4.228-4.178zM18.872 28.682l-7.266-7.178-4.229 4.178 11.495 11.355 11.495-11.355-4.229-4.178-7.266 7.178zm0-5.971l4.229-4.178-4.229-4.177-4.228 4.177 4.228 4.177z' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' transform='translate(.111)' d='M0 0h146.991v37.037H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

const TwitterIconSvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      width='100%'
      viewBox='0 0 21 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6.604 16c7.925 0 12.259-6.156 12.259-11.495 0-.175 0-.349-.013-.522A8.484 8.484 0 0021 1.892a9.05 9.05 0 01-2.475.635A4.112 4.112 0 0020.42.293a8.991 8.991 0 01-2.736.98 4.408 4.408 0 00-2.445-1.22 4.563 4.563 0 00-2.732.425 4.162 4.162 0 00-1.893 1.896 3.813 3.813 0 00-.273 2.584 12.874 12.874 0 01-4.918-1.225A12.12 12.12 0 011.462.737 3.826 3.826 0 00.99 3.681c.248 1.002.893 1.878 1.806 2.45A4.496 4.496 0 01.84 5.623v.052c0 .932.345 1.836.975 2.558a4.368 4.368 0 002.482 1.402 4.58 4.58 0 01-1.946.07 4.064 4.064 0 001.533 2.007 4.502 4.502 0 002.492.798 9.018 9.018 0 01-5.35 1.733c-.343-.001-.686-.02-1.026-.059a12.795 12.795 0 006.604 1.812' />
    </svg>
  )
}

const DiscordIconSvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      width='100%'
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M11.156 8.766c-.6 0-1.074.516-1.074 1.159 0 .642.484 1.158 1.074 1.158.601 0 1.075-.516 1.075-1.159 0-.642-.485-1.158-1.075-1.158zm-3.845 0c-.6 0-1.074.516-1.074 1.159 0 .642.484 1.158 1.074 1.158.6 0 1.075-.516 1.075-1.159.01-.642-.474-1.158-1.075-1.158z' />
      <path d='M16.277 0H2.16C.97 0 0 .97 0 2.16v14.117c0 1.19.97 2.16 2.16 2.16h11.947l-.559-1.928 1.349 1.243 1.275 1.17 2.275 1.97V2.16A2.179 2.179 0 0016.277 0zM12.21 13.643s-.379-.453-.695-.843c1.38-.39 1.907-1.243 1.907-1.243a6.033 6.033 0 01-1.212.622 7.558 7.558 0 01-1.527.453 7.38 7.38 0 01-2.729-.01 8.015 8.015 0 01-1.549-.454 6.17 6.17 0 01-.769-.358c-.031-.021-.063-.032-.094-.053-.022-.01-.032-.02-.043-.02-.19-.106-.295-.18-.295-.18s.506.832 1.844 1.233c-.316.4-.706.864-.706.864-2.328-.074-3.213-1.591-3.213-1.591 0-3.36 1.517-6.09 1.517-6.09 1.517-1.127 2.95-1.095 2.95-1.095l.105.126c-1.896.538-2.76 1.37-2.76 1.37s.232-.127.622-.295a8.255 8.255 0 012.391-.664c.063-.01.116-.021.18-.021a8.914 8.914 0 012.127-.021c1.001.116 2.076.41 3.171 1 0 0-.832-.79-2.623-1.327l.148-.168s1.443-.032 2.95 1.095c0 0 1.517 2.73 1.517 6.09 0-.01-.885 1.506-3.214 1.58z' />
    </svg>
  )
}

const GithubIconSvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      width='100%'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9 0C4.03 0 0 4.132 0 9.228c0 4.077 2.579 7.535 6.155 8.755.45.085.614-.2.614-.444 0-.22-.008-.947-.012-1.718-2.503.558-3.032-1.088-3.032-1.088-.41-1.065-1-1.349-1-1.349-.817-.572.063-.561.063-.561.903.064 1.38.95 1.38.95.802 1.411 2.106 1.003 2.618.767.082-.595.315-1.003.572-1.233-1.998-.233-4.1-1.025-4.1-4.56 0-1.009.351-1.83.926-2.477-.092-.234-.402-1.173.089-2.443 0 0 .754-.248 2.475.946A8.37 8.37 0 019 4.463a8.387 8.387 0 012.253.311c1.717-1.195 2.473-.946 2.473-.946.492 1.271.183 2.209.09 2.442.577.646.925 1.468.925 2.477 0 3.544-2.104 4.325-4.11 4.554.325.286.611.847.611 1.707 0 1.234-.012 2.228-.012 2.532 0 .246.164.533.62.443 3.574-1.222 6.15-4.68 6.15-8.755C18 4.132 13.97 0 9 0z' />
    </svg>
  )
}

const MediumIconSvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      width='100%'
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.372 3.264a.783.783 0 00-.253-.658L.252.338V0h5.799l4.482 9.905L14.473 0H20v.338l-1.597 1.543a.473.473 0 00-.177.452v11.335a.472.472 0 00.177.45l1.56 1.544V16h-7.844v-.338l1.616-1.58c.158-.16.158-.207.158-.452V4.468l-4.49 11.495h-.607L3.566 4.468v7.704c-.043.324.064.65.29.884l2.1 2.568v.34H0v-.34l2.1-2.568c.226-.234.326-.563.272-.884V3.264z'
      />
    </svg>
  )
}
