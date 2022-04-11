import React, { Component } from 'react'
import { useTranslation } from 'next-i18next'

import { BoxLinkWithImage } from 'lib/components/BoxLinkWithImage'

import EtherscanSymbol from 'assets/images/etherscan-symbol.svg'
import OpenZeppelinSymbol from 'assets/images/openzeppelin-logo.svg'
import C4Symbol from 'assets/images/c4-logo.svg'
import GithubBugsSymbol from 'assets/images/github-bugs.svg'
import GithubDarkSymbol from 'assets/images/github-dark.svg'

export const SecurityAuditsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='pool-container mx-auto flex flex-col text-base h-full z-10 relative mb-20'>
        <h4 className='mb-6'>{t('audistsAndSecurity', 'Audits & Security')}</h4>

        <h5 className='my-0'>OpenZeppelin</h5>

        <p>
          {t(
            'auditedByOpenZeppelin',
            'Our smart contracts have been reviewed extensively by OpenZeppelin:'
          )}
        </p>

        <BoxLinkWithImage
          isExternal
          href='https://code4rena.com/reports/2021-10-pooltogether/'
          title='Code4rea V4 Audit'
          imgSrc={C4Symbol}
        >
          Code4rena V4 Audit
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://blog.openzeppelin.com/pooltogether-v3-audit/'
          title='OpenZeppelin V3 Audit'
          imgSrc={OpenZeppelinSymbol}
        >
          OpenZeppelin V3 Audit
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://blog.openzeppelin.com/pooltogether-pods-audit/'
          title='OpenZeppelin Certificate'
          imgSrc={OpenZeppelinSymbol}
        >
          OpenZeppelin V2 Pods Audit
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://blog.openzeppelin.com/pooltogether-audit'
          title='OpenZeppelin PoolTogether Audit'
          imgSrc={OpenZeppelinSymbol}
        >
          OpenZeppelin V2 PoolTogether Audit
        </BoxLinkWithImage>
        {/* 
        <BoxLinkWithImage
          href='/quantstamp-2-pool-together-2-1.pdf'
          title='Quantstamp Certificate'
          imgSrc={QuantstampSymbol}
        >
          Quantstamp Certificate #2
        </BoxLinkWithImage>

        <BoxLinkWithImage
          href='/quantstamp-1-pool-together-2-0.pdf'
          title='Quantstamp Certificate'
          imgSrc={QuantstampSymbol}
        >
          Quantstamp Certificate #1
        </BoxLinkWithImage> */}

        <br />

        <h5 id='bug-bounties' className='mt-10'>
          {t('securityAndBugBounties', 'Security & Bug Bounties')}
        </h5>

        <p>
          {t(
            'weOfferBugBountiesOnGithub',
            'We offer public security bug bounties to incentivize vulnerability disclosures by anyone. Bounties are described on GitHub.'
          )}
        </p>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/pooltogether-contracts/issues/1'
          title='Bug bounties on Github'
          imgSrc={GithubBugsSymbol}
        >
          {t('bugBountiesOnGithub', 'Bug bounties on Github')}
        </BoxLinkWithImage>

        <br />

        <h5 className='mt-10'>{t('openSourceCode', 'Open Source Code')}</h5>

        <p>
          {t(
            'contractsArePublicAndVerified',
            'PoolTogether strives to be as transparent as possible by publishing the smart contract code publicly and verifying the smart contracts on popular block explorers like Etherscan.'
          )}
        </p>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/v4-core'
          title='V4 smart contracts on Github'
          imgSrc={GithubDarkSymbol}
        >
          {t('v4ContractsOnGithub', 'V4 smart contracts on Github')}
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/pooltogether-contracts'
          title='V3 smart contracts on Github'
          imgSrc={GithubDarkSymbol}
        >
          {t('v3ContractsOnGithub', 'V3 smart contracts on Github')}
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/v4-ui'
          title='V4 user interface on Github'
          imgSrc={GithubDarkSymbol}
        >
          {t('v4UIOnGithub', 'V4 user interface on Github')}
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://v4.docs.pooltogether.com/protocol/reference/deployments/mainnet'
          title='Verified smart contracts'
          imgSrc={EtherscanSymbol}
        >
          {t('verifiedContracts', 'Verified smart contracts')}
        </BoxLinkWithImage>
      </div>
    </>
  )
}
