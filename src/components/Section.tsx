import classNames from 'classnames'
import { ReactNode } from 'react'
import { SvgBackground, SvgBackgroundProps } from './SvgBackground'

interface SectionProps extends SvgBackgroundProps {
  children: ReactNode
  className?: string
}

export const Section = (props: SectionProps) => {
  const { children, className, ...rest } = props

  return (
    <section className={classNames('relative w-full flex flex-col isolate', className)}>
      <SvgBackground {...rest} />
      {children}
    </section>
  )
}
