import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { useFormattedProtocolStats } from '@hooks/useFormattedProtocolStats'

interface HeroSection {
  className?: string
}

export const HeroSection = (props: HeroSection) => {
  const { className } = props

  return (
    <Section
      bg='indexSection1.svg'
      smallBg='mobileIndexSection1.svg'
      animatedBg='indexSection1.svg'
      className={classNames('aspect-[375/500] md:aspect-[1600/835]', className)}
    >
      <div className='relative w-full h-full max-w-[1440px] flex flex-col mx-auto'>
        <TextBanner className='w-full h-[34%] md:max-w-[35%] md:h-[37.9%] md:mt-[5.2%] md:ml-[5%]' />
      </div>
    </Section>
  )
}

interface TextBannerProps {
  className?: string
}

const TextBanner = (props: TextBannerProps) => {
  const { className } = props

  const t = useTranslations('Home')

  const { uniqueWallets } = useFormattedProtocolStats()

  return (
    <div
      className={classNames(
        'flex flex-col gap-2 px-4 text-center justify-center md:gap-6 md:px-0 md:text-start',
        className
      )}
    >
      <h1 className='font-averta font-bold text-[2.5rem] !leading-tight md:flex md:flex-col md:text-3xl lg:text-[2.5rem] xl:text-[3.5rem]'>
        {t.rich('realAdoption', {
          ...RICH_TEXT_FORMATTING,
          first: (chunks) => (
            <span className='mr-[0.5ch] md:mr-0 md:whitespace-nowrap'>{chunks}</span>
          ),
          second: (chunks) => <span>{chunks}</span>
        })}
      </h1>
      <span className='text-base font-medium md:text-sm lg:text-base xl:text-2xl'>
        {t('permissionlessProtocol', { users: uniqueWallets })}
      </span>
    </div>
  )
}
