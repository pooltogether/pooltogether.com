import classNames from 'classnames'
import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface SvgBackgroundProps {
  bg: `${string}.svg`
  smallBg: `${string}.svg`
  animatedBg?: `${string}.svg`
  animatedSmallBg?: `${string}.svg`
}

export const SvgBackground = (props: SvgBackgroundProps) => {
  const { bg, smallBg, animatedBg, animatedSmallBg } = props

  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsReducedMotion(true)
    }
  }, [])

  const isBgAnimated = !!animatedBg && !isReducedMotion
  const isSmallBgAnimated = !!animatedSmallBg && !isReducedMotion

  const bgSrc = `/backgrounds/static/${bg}`
  const smallBgSrc = `/backgrounds/static/${smallBg}`
  const animatedBgSrc = `/backgrounds/animated/${animatedBg}`
  const animatedSmallBgSrc = `/backgrounds/animated/${animatedSmallBg}`

  const baseClassName = 'absolute w-full -z-10'
  const bgClassName = 'hidden md:block'
  const smallBgClassName = 'md:hidden'

  return (
    <>
      <StaticBG
        src={isBgAnimated ? animatedBgSrc : bgSrc}
        className={classNames(baseClassName, bgClassName)}
      />
      <StaticBG
        src={isSmallBgAnimated ? animatedSmallBgSrc : smallBgSrc}
        className={classNames(baseClassName, smallBgClassName)}
        isSmall={true}
      />
      {isBgAnimated && (
        <AnimatedBG
          src={animatedBgSrc}
          className={classNames(baseClassName, bgClassName, '-z-[5]')}
        />
      )}
      {isSmallBgAnimated && (
        <AnimatedBG
          src={animatedSmallBgSrc}
          className={classNames(baseClassName, smallBgClassName, '-z-[5]')}
        />
      )}
    </>
  )
}

interface StaticBGProps {
  src: string
  isSmall?: boolean
  className?: string
}

const StaticBG = (props: StaticBGProps) => {
  const { src, isSmall, className } = props

  return (
    <Image
      src={src}
      width={isSmall ? 375 : 1920}
      height={isSmall ? 667 : 1080}
      alt='Static BG'
      className={className}
      priority={true}
    />
  )
}

interface AnimatedBGProps {
  src: string
  className?: string
}

const AnimatedBG = (props: AnimatedBGProps) => {
  const { src, className } = props

  return <object type='image/svg+xml' data={src} className={className} />
}
