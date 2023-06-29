import classNames from 'classnames'

interface TermsOfServiceProps {
  className?: string
}

export const TermsOfService = (props: TermsOfServiceProps) => {
  const { className } = props

  const h2ClassName = 'mb-4 font-bold text-3xl'
  const h3ClassName = 'font-semibold text-2xl'
  const h4ClassName = 'font-semibold text-xl'

  return (
    <div
      className={classNames(
        'w-full max-w-[1440px] flex flex-col gap-4 mb-16 p-4 text-base',
        className
      )}
    >
      <h2 className={h2ClassName}>Terms of Service</h2>

      <p>
        Welcome to PoolTogether.com, a website of PoolTogether LLC (“PoolTogether”, “we”, “our”, or
        “us”). This page explains the terms by which you may use our website (the “Site”). By
        accessing or using the Site, you signify that you have read, understood, and agree to be
        bound by this Terms of Service Agreement (“Agreement”), whether or not you are a registered
        user of our Site. PoolTogether reserves the right to make unilateral modifications to these
        terms and will provide notice of these changes as described below. This Agreement applies to
        all visitors, users, and others who access the Site (“Users”).
      </p>

      <p>
        Please read this Agreement carefully to ensure that you understand each provision. This
        agreement contains a mandatory individual arbitration and class action/jury trial waiver
        provision that requires the use of arbitration on an individual basis to resolve disputes,
        rather than jury trials or class actions.
      </p>

      <h3 className={h3ClassName}>PoolTogether Site.</h3>

      <p>
        As part of the Site, PoolTogether provides access to a decentralized money saving and reward
        tool (“Protocol”) on the Ethereum blockchain, that allows participants to use Ethereum
        assets (“Assets”) to transact using smart contracts (“Smart Contracts”).
      </p>

      <h3 className={h3ClassName}>Use of Our Site.</h3>

      <h4 className={h4ClassName}>A. Eligibility</h4>

      <p>
        This is a contract between you and PoolTogether. You must read and agree to these terms
        before using the Site. If you do not agree, you may not use the Site. You may use the Site
        only if you can form a binding contract with PoolTogether, and only in compliance with this
        Agreement and all applicable local, state, national, and international laws, rules and
        regulations. Any use or access to the Site by anyone under eighteen (18) years of age is
        strictly prohibited and in violation of this Agreement. The Site is not available to any
        Users previously removed from the Site by PoolTogether.
      </p>

      <h4 className={h4ClassName}>B. Access and Use of the Site and Smart Contracts</h4>

      <p>
        Subject to the terms and conditions of this Agreement, you are hereby granted a
        non-exclusive, limited, non-transferable, freely revocable license to use the Site as
        permitted by the features of the Site. PoolTogether reserves all rights not expressly
        granted herein in the Site and the PoolTogether Content (as defined below). PoolTogether may
        terminate this license, in whole or in part, at any time for any reason or no reason.
      </p>

      <h4 className={h4ClassName}>C. Site Rules</h4>

      <p>
        You agree not to engage in any of the following prohibited activities: (i) copying,
        distributing, or disclosing any part of the Site in any medium, including without limitation
        by any automated or non-automated “scraping”; (ii) using any automated system, including
        without limitation “robots,” “spiders,” “offline readers,” etc., to access the Site in a
        manner that sends more request messages to the PoolTogether servers than a human can
        reasonably produce in the same period of time by using a conventional on-line web browser
        (except that PoolTogether grants the operators of public search engines revocable permission
        to use spiders to copy publically available materials from PoolTogether.com for the sole
        purpose of and solely to the extent necessary for creating publicly available searchable
        indices of the materials, but not caches or archives of such materials); (iii) transmitting
        spam, chain letters, or other unsolicited email; (iv) attempting to interfere with,
        compromise the system integrity or security or decipher any transmissions to or from the
        servers running the Site; (v) taking any action that imposes, or may impose at our sole
        discretion an unreasonable or disproportionately large load on our infrastructure; (vi)
        uploading invalid data, viruses, worms, or other software agents through the Site; (vii)
        collecting or harvesting any personally identifiable information, including account names,
        from the Site; (viii) using the Site for any commercial solicitation purposes; (ix)
        impersonating another person or otherwise misrepresenting your affiliation with a person or
        entity, conducting fraud, hiding or attempting to hide your identity; (x) interfering with
        the proper working of the Site; (xi) accessing any content on the Site through any
        technology or means other than those provided or authorized by the Site; or (xii) bypassing
        the measures we may use to prevent or restrict access to the Site, including without
        limitation features that prevent or restrict use or copying of any content or enforce
        limitations on use of the Site or the content therein.
      </p>

      <p>
        We may, without prior notice, change the Site; stop providing the Site or features of the
        Site, to you or to Users generally; or create usage limits for the Site. We may permanently
        or temporarily terminate or suspend your access to the Site without notice and liability for
        any reason, including if in our sole determination you violate any provision of this
        Agreement, or for no reason. Upon termination for any reason or no reason, you continue to
        be bound by this Agreement.
      </p>

      <p>
        You are solely responsible for your interactions with other PoolTogether Users and Protocol
        Users. We reserve the right, but have no obligation, to monitor disputes between you and
        other Users. PoolTogether shall have no liability for your interactions with other Users, or
        for any User's action or inaction.
      </p>

      <h4 className={h4ClassName}>D. Site Location</h4>

      <p>
        The Site is controlled and operated from facilities in the United States. PoolTogether makes
        no representations that the Site is appropriate or available for use any locations. Those
        who access or use the Site from any jurisdictions do so at their own volition and are
        entirely responsible for compliance with all applicable United States and local laws and
        regulations, including but not limited to export and import regulations. You may not use the
        Site if you are a resident of a country embargoed by the United States, or are a foreign
        person or entity blocked or denied by the United States government. Unless otherwise
        explicitly stated, all materials found on the Site are solely directed to individuals,
        companies, or other entities located in the United States.
      </p>

      <h3 className={h3ClassName}>Our Proprietary Rights.</h3>

      <p>
        The Site and all materials therein or transferred thereby, including, without limitation,
        software, images, text, graphics, illustrations, logos, patents, trademarks, service marks,
        copyrights, photographs, audio, videos, music, and User Content belonging to other Users
        (the “PoolTogether Content”), and all Intellectual Property Rights related thereto, are the
        exclusive property of PoolTogether and its licensors. Except as explicitly provided herein,
        nothing in this Agreement shall be deemed to create a license in or under any such
        Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute,
        copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or
        create derivative works from any PoolTogether Content. Use of the PoolTogether Content for
        any purpose not expressly permitted by this Agreement is strictly prohibited.
      </p>

      <p>
        You may choose to or we may invite you to submit comments or ideas about the Site, including
        without limitation about how to improve the Site or our products (“Ideas”). By submitting
        any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction
        and will not place PoolTogether under any fiduciary or other obligation, and that we are
        free to use the Idea without any additional compensation to you, and/or to disclose the Idea
        on a non-confidential basis or otherwise to anyone. You further acknowledge that, by
        acceptance of your submission, PoolTogether does not waive any rights to use similar or
        related ideas previously known to PoolTogether, or developed by its employees, or obtained
        from sources other than you.
      </p>

      <h3 className={h3ClassName}>No Professional Advice.</h3>

      <p>
        If the Site provides professional information (for example, medical, legal, or financial),
        such information is for informational purposes only and should not be construed as
        professional advice. No action should be taken based upon any information contained in the
        Site. You should seek independent professional advice from a person who is licensed and/or
        qualified in the applicable area.
      </p>

      <h3 className={h3ClassName}>Privacy.</h3>

      <p>
        We care about the privacy of our Users. You understand that by using the Sites you consent
        to the collection, use and disclosure of personally identifiable information and aggregate
        data, and to have your personally identifiable information collected, used, transferred to
        and processed in the United States.
      </p>

      <h3 className={h3ClassName}>Security.</h3>

      <p>
        PoolTogether uses commercially reasonable physical, managerial, and technical safeguards to
        preserve the integrity and security of your personal information and implement your privacy
        settings. However, we cannot guarantee that unauthorized third parties will never be able to
        defeat our security measures or use your personal information for improper purposes. You
        acknowledge that you provide your personal information at your own risk.
      </p>

      <h3 className={h3ClassName}>Third-Party Links and Information.</h3>

      <p>
        The Site may contain links to third-party materials that are not owned or controlled by
        PoolTogether. PoolTogether does not endorse or assume any responsibility for any such
        third-party sites, information, materials, products, or services. If you access a
        third-party website or service from the Site on or through any third-party website or
        service, you do so at your own risk, and you understand that this Agreement and PoolTogether
        Privacy Policy do not apply to your use of such sites. You expressly relieve PoolTogether
        from any and all liability arising from your use of any third-party website, service, or
        content. Additionally, your dealings with or participation in promotions of advertisers
        found on the Site, including payment and delivery of goods, and any other terms (such as
        warranties) are solely between you and such advertisers. You agree that PoolTogether shall
        not be responsible for any loss or damage of any sort relating to your dealings with such
        advertisers.
      </p>

      <h3 className={h3ClassName}>Indemnity.</h3>

      <p>
        You agree to defend, indemnify and hold harmless PoolTogether and its subsidiaries, agents,
        licensors, managers, and other affiliated companies, and their employees, contractors,
        agents, officers and directors, from and against any and all claims, damages, obligations,
        losses, liabilities, costs or debt, and expenses (including but not limited to attorney's
        fees) arising from: (i) your use of and access to the Site, including any data or content
        transmitted or received by you; (ii) your violation of any term of this Agreement, including
        without limitation your breach of any of the representations and warranties above; (iii)
        your violation of any third-party right, including without limitation any right of privacy
        or Intellectual Property Rights; (iv) your violation of any applicable law, rule or
        regulation; (v) any content that you submit to the Site including without limitation
        misleading, false, or inaccurate information; (vi) your willful misconduct; or (vii) any
        other party's access and use of the Site with your unique username, password or other
        appropriate security code.
      </p>

      <h3 className={h3ClassName}>Assumption of Risk; Release of Claims.</h3>

      <p>
        You acknowledge that the Site (including without limitation the Protocol and the Smart
        Contracts) and your use of the Site contain certain risks, including without limitation the
        following risks: That any Smart Contracts you interact with are entirely your own
        responsibility / liability, and PoolTogether is not a party to the Smart Contracts;At any
        time, your access to your Assets may be suspended or terminated or there may be a delay in
        your access or use of your Assets which may result in the Assets diminishing in value or you
        being unable to complete a Smart Contract and the Protocol may be suspended or terminated
        for any or no reason, which may limit your access to your Assets.
      </p>

      <p>
        Accordingly, you expressly agree that: (A) you assume all risk in connection with your
        access and use of the Site, the Protocol and the Smart Contracts; and (B) that you expressly
        waive and release PoolTogether from any and all liability, claims, causes of action, or
        damages arising from or in any way related to your use of the Site, the Protocol or the
        Smart Contracts. If you are a California resident, you waive California Civil Code §1542,
        which says: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR
        SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY
        HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.”
      </p>

      <h3 className={h3ClassName}>No Warranty.</h3>

      <p>
        The Site is provided on an “as is” and “as available” basis. Use of the Site is at your own
        risk. To the maximum extent permitted by applicable law, the Site is provided without
        warranties of any kind, whether express or implied, including, but not limited to, implied
        warranties of merchantability, fitness for a particular purpose, or non-infringement. No
        advice or information, whether oral or written, obtained by you from PoolTogether or through
        the Site will create any warranty not expressly stated herein. Without limiting the
        foregoing, PoolTogether, its subsidiaries, its affiliates, and its licensors do not warrant
        that the content is accurate, reliable or correct; that the Site will meet your
        requirements; that the Site will be available at any particular time or location,
        uninterrupted or secure; that any defects or errors will be corrected; or that the Site is
        free of viruses or other harmful components. Any content downloaded or otherwise obtained
        through the use of the Site is downloaded at your own risk and you will be solely
        responsible for any damage to your computer system or mobile device or loss of data that
        results from such download or your use of the Site.
      </p>

      <p>
        PoolTogether does not warrant, endorse, guarantee, or assume responsibility for any product
        or site advertised or offered by a third party through the Site or any hyperlinked website
        or site, and PoolTogether will not be a party to or in any way monitor any transaction
        between you and third-party providers of products or services.
      </p>

      <h3 className={h3ClassName}>Limitation of Liability.</h3>

      <p>
        To the maximum extent permitted by applicable law, in no event shall PoolTogether, its
        affiliates, agents, directors, employees, suppliers or licensors be liable for any indirect,
        punitive, incidental, special, consequential or exemplary damages, including without
        limitation damages for loss of profits, goodwill, use, data or other intangible losses,
        arising out of or relating to the use of, or inability to use, this Site. Under no
        circumstances will PoolTogether be responsible for any damage, loss or injury resulting from
        hacking, tampering or other unauthorized access or use of the Site or the information
        contained therein.To the maximum extent permitted by applicable law, PoolTogether assumes no
        liability or responsibility for any (i) errors, mistakes, or inaccuracies of content; (ii)
        personal injury or property damage, of any nature whatsoever, resulting from your access to
        or use of our site; (iii) any unauthorized access to or use of our secure servers and/or any
        and all personal information stored therein; (iv) any interruption or cessation of
        transmission to or from the Site; (v) any bugs, viruses, trojan horses, or the like that may
        be transmitted to or through our site by any third party; (vi) any errors or omissions in
        any content or for any loss or damage incurred as a result of the use of any content posted,
        emailed, transmitted, or otherwise made available through the Site; and/or (vii) User
        Content or the defamatory, offensive, or illegal conduct of any third party. In no event
        shall PoolTogether, its affiliates, agents, directors, employees, suppliers, or licensors be
        liable to you for any claims, proceedings, liabilities, obligations, damages, losses or
        costs in an amount exceeding the amount you paid to PoolTogether hereunder or $100.00,
        whichever is greater.
      </p>

      <p>
        This limitation of liability section applies whether the alleged liability is based on
        contract, tort, negligence, strict liability, or any other basis, even if PoolTogether has
        been advised of the possibility of such damage. The foregoing limitation of liability shall
        apply to the fullest extent permitted by law in the applicable jurisdiction.
      </p>

      <h3 className={h3ClassName}>Limitations as Allowed by Law.</h3>

      <p>
        Federal law, some states, provinces and other jurisdictions do not allow the exclusion and
        limitations of certain implied warranties, or the exclusion or limitation of incidental or
        consequential damages, so the above limitations or exclusions may not apply to you. This
        agreement gives you specific legal rights, and you may also have other rights which vary
        from state to state. The disclaimers, exclusions, and limitations of liability under this
        agreement will not apply to the extent prohibited by applicable law.
      </p>

      <h3 className={h3ClassName}>
        Governing Law, Arbitration, and Class Action/Jury Trial Waiver.
      </h3>

      <p>
        Arbitration. Read this section carefully because it requires the parties to arbitrate their
        disputes and limits the manner in which you can seek relief from PoolTogether. For any
        dispute with Pooltogether, you agree to first contact us at legal@Pooltogether.com and
        attempt to resolve the dispute with us informally. In the unlikely event that PoolTogether
        has not been able to resolve a dispute it has with you after sixty (60) days, we each agree
        to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other
        equitable relief as provided below) arising out of or in connection with or relating to this
        Agreement, or the breach or alleged breach thereof (collectively, “Claims”), by binding
        arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for
        JAMS, except as provided herein. JAMS may be contacted at www.jamsadr.com. The arbitration
        will be conducted in New York, New York, unless you and PoolTogether agree otherwise. If you
        are using the Site for commercial purposes, each party will be responsible for paying any
        JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award
        rendered by the arbitrator shall include costs of arbitration, reasonable attorneys' fees
        and reasonable costs for expert and other witnesses. If you are an individual using the Site
        for non-commercial purposes: (i) JAMS may require you to pay a fee for the initiation of
        your case, unless you apply for and successfully obtain a fee waiver from JAMS; (ii) the
        award rendered by the arbitrator may include your costs of arbitration, your reasonable
        attorney's fees, and your reasonable costs for expert and other witnesses; and (iii) you may
        sue in a small claims court of competent jurisdiction without first engaging in arbitration,
        but this does not absolve you of your commitment to engage in the informal dispute
        resolution process. Any judgment on the award rendered by the arbitrator may be entered in
        any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing
        PoolTogether from seeking injunctive or other equitable relief from the courts as necessary
        to prevent the actual or threatened infringement, misappropriation, or violation of our data
        security, Intellectual Property Rights or other proprietary rights.
      </p>

      <p>
        Class Action/Jury Trial Waiver. With respect to all persons and entities, regardless of
        whether they have obtained or used the site for personal, commercial or other purposes, all
        Claims must be brought in the parties' individual capacity, and not as a plaintiff or class
        member in any purported class action, collective action, private attorney general action or
        other representative proceeding. This waiver applies to class arbitration, and, unless we
        agree otherwise, the arbitrator may not consolidate more than one person's claims. You agree
        that, by entering into this agreement, you and PoolTogether are each waiving the right to a
        trial by jury or to participate in a class action, collective action, private attorney
        general action, or other representative proceeding of any kind.
      </p>
    </div>
  )
}
