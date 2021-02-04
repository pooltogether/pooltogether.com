import React, { Component } from 'react'

import { BoxLinkWithImage } from 'lib/components/BoxLinkWithImage'

import EtherscanSymbol from 'assets/images/etherscan-symbol.svg'
import OpenZeppelinSymbol from 'assets/images/openzeppelin-logo.svg'
import QuantstampSymbol from 'assets/images/quantstamp.svg'
import GithubBugsSymbol from 'assets/images/github-bugs.svg'
import GithubDarkSymbol from 'assets/images/github-dark.svg'

export const SecurityAuditsPage = class _SecurityAuditsPage extends Component {

  render () {
    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'
      >
        <h4
          className='mb-6'
        >
          Audits &amp; Security
        </h4>

        <h5
          className='my-0'
        >
          OpenZeppelin
        </h5>

        <p>
          Our smart contracts have been reviewed extensively by OpenZeppelin:
        </p>

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

        <h5
          id='bug-bounties'
          className='mt-10'
        >
          Security &amp; Bug Bounties
        </h5>

        <p>
          We offer public security bug bounties to incentivize vulnerability disclosures by anyone. Bounties are <a
            href='https://github.com/pooltogether/pooltogether-contracts/issues/1'
            target='_blank'
            rel='noopener noreferrer'
            title='View our code on GitHub'
          >described on GitHub</a>.
        </p>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/pooltogether-contracts/issues/1'
          title='Bug bounties on Github'
          imgSrc={GithubBugsSymbol}
        >
          Bug bounties on Github
        </BoxLinkWithImage>

        <br />

        <h5
          className='mt-10'
        >
          Public Source Code
        </h5>

        <p>
          PoolTogether strives to be as transparent as possible by publishing the smart contract code publicly and verifying the smart contracts on Etherscan.
        </p>

        <BoxLinkWithImage
          isExternal
          href='https://github.com/pooltogether/pooltogether-contracts'
          title='Source code on Github'
          imgSrc={GithubDarkSymbol}
        >
          Source code on Github
        </BoxLinkWithImage>

        <BoxLinkWithImage
          isExternal
          href='https://etherscan.io/address/0x29fe7d60ddf151e5b52e5fab4f1325da6b2bd958#tokentxns'
          title='Verified code on Etherscan'
          imgSrc={EtherscanSymbol}
        >
          Verified code on Etherscan
        </BoxLinkWithImage>
      </div>
    </>
  }

}