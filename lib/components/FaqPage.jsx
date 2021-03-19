import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react'

import { Collapsible } from 'lib/components/Collapsible'

const debug = require('debug')('pt:components:FaqPage')

export const FaqPage = class _FaqPage extends Component {

  state = {
    emailSubscribeModalOpen: false,
  }

  render() {
    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative mb-20'
      >
        <h4
          className='mb-6'
        >
          Questions &amp; Answers
        </h4>
        <Collapsible
          title='What is PoolTogether?'
        >
          PoolTogether is a protocol for no-loss prize games on Ethereum. Modeled on the well established concept of "<a href='http://beniverson.org/papers/MaMa.pdf'>no loss lotteries</a>" and "<a href='https://en.wikipedia.org/wiki/Prize-linked_savings_account'>prize savings accounts</a>" the protocol offers a chance to win prizes in exchange for depositing funds. Even if you don't win, you keep all your deposited funds. Prizes are made up of the interest that accrues on all users deposits.

          <br /><br />Because this protocol is built on Ethereum using new technology, using it includes substantial risks that should be understood before depositing. <a href='https://docs.pooltogether.com/security/risks'>Learn more about the risks here</a>.
        </Collapsible>

        <Collapsible
          title='Where does the money for the prize come from?'
        >
          When you join a prize pool, your money is deposited into a yield source. The yield source generates the return that makes up the prizes. Currently, the protocol supports two different yield sources, <a href='https://compound.finance/'>Compound.Finance</a> and <a href='https://yearn.finance/vaults'>yEarn Vaults</a>. Each of these yield sources carries its own risks which need to be understood in addition to the risk of using the PoolTogether Protocol.
        </Collapsible>

        <Collapsible
          title='What are the risks?'
        >
          We've worked hard to ensure the security of the protocol. Our code is open source and has been independently audited by professional third party security companies. Additionally, we have a bug bounty program and do extensive internal testing. <a href='https://docs.pooltogether.com/security/audits-and-testing'>You can see our most recent audits and read more about our bug bounty program here</a>.

          However, as with all early-stage products there are risks associated with using protocol and users assume the full responsibility for these risks. You should not deposit any money you are not comfortable losing. You can read the details of <a href='https://docs.pooltogether.com/security/risks'>each type of risk involved in using PoolTogether here</a>.
        </Collapsible>

        <Collapsible
          title='Do I have to enter for each prize?'
        >
          No! Once you have entered into the pool you will continue to be eligible for future prizes. You do not need to take any further action. You will be eligible until you withdraw the money you deposited.
        </Collapsible>

        <Collapsible
          title='How do I know if I won?'
        >
          If you joined a Pool you can check if you’ve won by looking at your “<a href='https://app.pooltogether.com/en/account'>account</a>” page after a prize has been awarded.

          You do not need to claim your winnings. If you win, your winnings will automatically be converted to tickets which will increase your chances of winning again!
        </Collapsible>

        <Collapsible
          title='What are my odds of winning?'
        >
          Your odds of winning depend on how much money is in the pool. For example, if 1,000 Dai is in the pool and you deposit 1 Dai you will get 1 ticket. Your chance of winning would be 1 in 1,000.  You can always check your odds of winning on the account page.
        </Collapsible>

        <Collapsible
          title='How do I know that the winning ticket is truly selected at random?'
        >
          The protocol relies on the third party random number generator service <a href='https://docs.chain.link/docs/chainlink-vrf'>ChainLink to provide randomness</a>. It is not perfect but it is currently the best way to generate randomness on the Ethereum blockchain.
        </Collapsible>

        <Collapsible
          title='What prevents people from depositing right before a prize and withdrawing right after? '
        >
          When you deposit into a prize pool, you are instantly eligible to win. This creates a possibility for people to abuse the system by depositing right before a prize, having a chance to win, and withdrawing right after.

          <br /><br />The protocol prevents this by enforcing a temporary early withdrawal penalty. This means if someone deposits and immediately withdraws they will have to pay a penalty that will go to the next prize. Over time this penalty reduces to zero. The early withdrawal penalty is different for each prize pool but is generally two times the length of the prize period. Therefore the weekly prize pool would have an early withdrawal penalty for the first two weeks. <a href='https://docs.pooltogether.com/protocol/prize-pool/fairness'>Read more here</a>.
        </Collapsible>

        <Collapsible
          title='What are the “Sponsored” deposits?'
        >
          Sponsored deposits contribute interest to the prize but are NOT eligible to win. It serves the purpose of increasing the size of the prize without decreasing the chance to win. Anyone can sponsor the prize pools. Generally sponsorship is provided by individuals and crypto companies that want to help grow the ecosystem.
        </Collapsible>

        <Collapsible
          title='What are Dai, USDC and Tether?'
        >
          Dai, USDC, and Tether are stablecoins, or digital assets, whose price is intended to be pegged to the US dollar.  This means the value of one Dai, USDC or Tether is generally equal to 1 US Dollar, and their values are not intended to fluctuate like Bitcoin and other cryptocurrencies. However, because the prices of Dai and USDC and Tether are market driven, there are still price fluctuations. Using Dai and USDC, as with any cryptocurrency, comes with other risks. You can learn more about the risks associated with Dai and USDC by going <a href='https://makerdao.com/en/'>here</a> and <a href='https://www.circle.com/en/usdc'>here</a>.
        </Collapsible>

        <Collapsible
          title='How can I get Dai, USDC and Tether?'
        >
          There are many ways to acquire these crypto currencies. One easy way is to purchase them on a cryptocurrency exchange. <a href='https://www.coinbase.com/'>Coinbase</a> is one exchange that is popular and easy to use. If you already own Ethereum, you can exchange your Ethereum for Dai, USDC, and Tether on <a href='https://uniswap.org/'>uniswap.exchange</a>, an open exchange.
        </Collapsible>

        <Collapsible
          title='Why does this matter?'
        >
          Over 80 billion dollars are spent on lottery tickets each year in North America alone. At the same time, 40% of Americans do not have more than $400 of cash saved. PoolTogether wants to change these economics by turning money spent into money saved. We believe this is crucial to the economic safety and well being for millions of people around the world. You can learn more about our vision and <a href='https://www.youtube.com/watch?v=voDBfTzFh9g'>why we built Pooltogether here</a>.
        </Collapsible>

        <Collapsible
          title='How does PoolTogether make money?'
        >
          PoolTogether does not make money. PoolTogether is backed by some of the top venture capital firms in the world which allows us to focus on building an excellent open source and decentralized protocol.
        </Collapsible>


        <h3 className='mt-10'>
          I have more questions ...
        </h3>
        <p className='pb-4  mt-1'>
          Feel free to reach out to us on Twitter <a
            target='_blank'
            rel='noreferrer nofollow'
            href='https://twitter.com/PoolTogether_'
          >
            @PoolTogether_
          </a> or email at <a
            href='mailto:hello@pooltogether.com'
            target='_blank'
            rel='noreferrer nofollow'
          >
            hello@pooltogether.com
          </a>.
        </p>

        {/* <h3>
          I'd like to be notified when draws happen.
        </h3>
        <p className='pb-4 text-purple mt-1'>
          You can&nbsp;
          <a
            className='trans trans-fast cursor-pointer'
            onClick={() => this.setState({ emailSubscribeModalOpen: true })}
          >

            <FeatherIcon
              icon='mail'
              className='inline-block w-3 h-3 md:h-4 md:w-4 -mt-1'
            /> Subscribe to Draw Announcements
          </a> at any time.
        </p> */}


        <h3>
          I'm ready to join the pool. 🏊
        </h3>
        <p className='pb-4  mt-1'>
          Great, <a
            href='https://app.pooltogether.com'
          >
            hop in
          </a>!
        </p>

        <div id='footnote1' className='text-xxs'>
          * Using the Pooltogether Protocol may result in the loss of some or all of your funds. Please read our FAQ and terms of service to understand the risks associated with Pooltogether.
        </div>

      </div>
    </>
  }

}