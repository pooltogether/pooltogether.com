import { LINKS } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { SimpleTextBanner } from '@components/SimpleTextBanner'
import { BuilderCards } from './BuilderCards'

interface MainSection {
  className?: string
}

export const MainSection = (props: MainSection) => {
  const { className } = props

  const t = useTranslations('Builders')

  return (
    <Section
      bg='buildersSection1.svg'
      smallBg='mobileBuildersSection1.svg'
      className={classNames('aspect-[375/667] md:aspect-[1600/2100]', className)}
    >
      <SimpleTextBanner
        title={t.rich('buildOnPt', RICH_TEXT_FORMATTING)}
        description={t('joinUs')}
        className='absolute w-full mt-[28%] md:h-[10%] md:justify-end md:mt-0 lg:h-[13.7%]'
        titleClassName='max-w-[1440px]'
        descriptionClassName='max-w-[1440px] px-[5%] sm:px-0'
      />
      <DocsCards className='absolute w-full mt-[54%] md:max-w-[min(60%,_1440px)] md:h-[7.5%] md:mt-[23.5%] md:ml-[20%] lg:h-[9.5%] xl:h-[11%]' />
      <CardRows className='w-full max-w-[1440px] mt-[95%] mb-8 mx-auto md:mt-[44%]' />
    </Section>
  )
}

interface DocsCardsProps {
  className?: string
}

const DocsCards = (props: DocsCardsProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'flex flex-col gap-3 items-center justify-center px-4 md:flex-row md:gap-8 md:px-0',
        className
      )}
    >
      <DocCard href={LINKS.devDocs} />
    </div>
  )
}

interface DocCardProps {
  href: string
  className?: string
}

const DocCard = (props: DocCardProps) => {
  const { href, className } = props

  const t = useTranslations('Builders')

  return (
    <a
      href={href}
      target='_blank'
      className={classNames(
        'flex gap-2 items-center px-8 py-6 bg-pt-bg-purple-darker rounded-2xl',
        'outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg',
        'md:w-full md:max-w-lg md:gap-4 md:justify-center',
        'xl:px-16 xl:py-12',
        className
      )}
    >
      <Image
        src='/icons/docIcon.svg'
        width={48}
        height={48}
        alt='Doc Icon'
        className='h-[18px] w-auto md:h-9 lg:h-14 xl:h-[75px]'
      />
      <div className='flex text-base text-pt-purple-50 md:flex-col lg:text-lg xl:text-xl'>
        {t.rich('devDocs', {
          first: (chunks) => <span className='mr-[.5ch] md:mr-0'>{chunks}</span>,
          second: (chunks) => <span>{chunks}</span>
        })}
      </div>
    </a>
  )
}

interface CardRowsProps {
  className?: string
}

const CardRows = (props: CardRowsProps) => {
  const { className } = props

  const t = useTranslations('Builders')

  return (
    <div className={classNames('flex flex-col gap-16', className)}>
      <BuilderCards
        iconSrc='/icons/smallCodeIcon.svg'
        title={t('devToolsSectionTitle')}
        cards={['cabanaFactory', 'clientJs', 'reactHooks', 'nextjsTemplate', 'sveltekitTemplate']}
      />
      <BuilderCards
        iconSrc='/icons/landscapeIcon.svg'
        title={t('designerToolsSectionTitle')}
        cards={['brandKit', 'pooltogetherUiKit', 'pooltogetherTokenBrandingGuidelines']}
      />
    </div>
  )
}
