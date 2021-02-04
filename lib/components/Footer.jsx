import React, { useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import { useTranslation } from 'lib/../i18n'

// import MailIcon from 'assets/images/mail-footer.svg'

import MediumLogo from 'assets/images/medium-logo.svg'
import GithubLogo from 'assets/images/github-logo.svg'
import DiscordLogo from 'assets/images/discord-logo.svg'
import TwitterLogo from 'assets/images/twitter-logo.svg'

import PoolTogetherLogo from 'assets/images/pooltogether-logo.svg'

export const Footer = () => {
  const [t] = useTranslation()

  const linkListItemClassNames = 'my-2'
  const linkClassNames = 'trans trans-fast text-accent-1 no-underline'
  // mt-1 sm:mt-3

  const FooterLink = (props) => <>
    <li
      className={linkListItemClassNames}
    >
      <Link
        href={props.href}
        as={props.href}
      >
        <a
          className={classnames(
            linkClassNames,
            { 
              flex: props.iconSrc
            }
          )}
        >
          {props.iconSrc && <img
            alt={`${props.children} icon/logo`}
            src={props.iconSrc}
            className='mr-4 w-4'
          />} {props.children}
        </a>
      </Link>
    </li>
  </>
  
  return <>
    <footer
      className='footer pool-container w-full text-accent-1 text-sm mx-auto'
    >
      <div
        className='flex flex-col pt-10 lg:pt-20'
      >
        <div
          className='pt-6 sm:pt-0 pb-8 flex flex-col sm:flex-row justify-between'
        >

                <div
                  className='footer--pool-logo-container '
                >
                  <Link
                    href='/'
                    as='/'
                    shallow
                  >
                    <a
                      title={'Back to home'}
                      className='pool-logo border-0 trans block w-full'
                    >
                      <img
                        src={PoolTogetherLogo}
                      />
                    </a>
                  </Link>
                </div>

                <nav
                  className='flex flex-wrap w-full sm:flex-no-wrap sm:justify-between sm:w-1/2'
                >

                  <div
                    className='w-full sm:w-1/3 sm:w-auto flex flex-col mb-8 mt-12 sm:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Protocol
                    </span>
                    <ul>
                      <FooterLink
                        href='/developers'
                      >
                        Developers
                      </FooterLink>
                      <FooterLink
                        href='/audits'
                      >
                        Security
                      </FooterLink>
                      <FooterLink
                        href='/faq'
                      >
                        FAQ
                      </FooterLink>
                      <FooterLink
                        href='/brand-assets'
                      >
                        Brand assets
                      </FooterLink>
                      <FooterLink
                        href='https://gov.pooltogether.com/'
                      >
                        Governance
                      </FooterLink>
                    </ul>
                  </div>


                  <div
                    className='w-full sm:w-1/3 flex flex-col mb-8 sm:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Company
                    </span>

                    <ul>
                      <FooterLink
                        href='https://medium.com/pooltogether'
                      >
                        Blog
                      </FooterLink>
                      <FooterLink
                        href='/careers'
                      >
                        Careers
                      </FooterLink>
                      <FooterLink
                        href='https://v2.pooltogether.com'
                      >
                        v2.0.0
                      </FooterLink>
                      <FooterLink
                        href='https://v1.pooltogether.com'
                      >
                        v1.0.0
                      </FooterLink>
                    </ul>
                  </div>


                  <div
                    className='w-1/2 md:w-auto flex flex-col mb-8 md:my-0'
                    style={{ 
                      width: 108
                    }}
                  >
                    <span
                      className='font-bold block'
                    >
                      Community
                    </span>

                    <ul>
                      <FooterLink
                        href='https://twitter.com/PoolTogether_'
                        iconSrc={TwitterLogo}
                      >
                        Twitter
                      </FooterLink>
                      
                      <FooterLink
                        href='https://discord.gg/hxPhPDW'
                        iconSrc={DiscordLogo}
                      >
                        Discord
                      </FooterLink>

                      <FooterLink
                        href='https://github.com/pooltogether'
                        iconSrc={GithubLogo}
                      >
                        Github
                      </FooterLink>

                      <FooterLink
                        href='https://medium.com/pooltogether'
                        iconSrc={MediumLogo}
                      >
                        Medium
                      </FooterLink>
                          
{/* 
                      <FooterLink
                        href=''
                      >
                        Advocates
                      </FooterLink>

                      <FooterLink
                        href=''
                      >
                        Invite friends
                      </FooterLink> */}
                    </ul>

                  </div>

      {/* 
                  <div
                    className='w-full sm:w-1/3 md:w-auto flex flex-col mb-8 md:my-0'
                  >
                    <span
                      className='font-bold block'
                    >
                      Products
                    </span>
                    <a
                      className={linkClassNames}
                      href='https://help.pooltogether.com'
                      title='Get answers at the help centre'
                    >
                      Help Centre
                    </a>
                    <a
                      className={linkClassNames}
                      href='https://app.pooltogether.com'
                    >
                      v2
                    </a>
                    <a
                      className={linkClassNames}
                      href='https://v1.pooltogether.com'
                    >
                      v1
                    </a>
                  </div> */}

                </nav>
        </div>

        <div
          className='flex justify-between flex-col sm:flex-row sm:pt-2 pb-10 sm:pb-20 lg:pb-20 text-xs border-t'
        >
          <div className='sm:w-1/2'>
            <span
              className='block mt-4'
            >
              &copy; {new Date().getFullYear()} PoolTogether Inc.
            </span>
          </div>

          <div className='w-32 lg:w-32'>
            <nav
              className='flex justify-between w-full'
            >
              {/* <a
                className={classnames(
                  'mt-2 sm:mt-4',
                  linkClassNames,
                )}
                href='/privacy'
              >
                Privacy
              </a> */}
              <a
                className={classnames(
                  'mt-2 sm:mt-4',
                  linkClassNames,
                )}
                href='/terms'
              >
                Terms
              </a>
              <a
                className={classnames(
                  'mt-2 sm:mt-4',
                  linkClassNames,
                )}
                href='/sitemap.xml'
              >
                Sitemap
              </a>
            </nav>
          </div>

          
        </div>
      </div>

    </footer>
  </>
}