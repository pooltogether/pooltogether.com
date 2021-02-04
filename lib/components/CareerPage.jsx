import React, { Component } from 'react'
import Link from 'next/link'

import { ButtonLink } from 'lib/components/ButtonLink'

export const CareerPage = class _CareerPage extends Component {

  render () {
    const {
      title,
      titleEmail,
      description,
      p1Heading,
      p1Subheading,
      p1,
      p2Heading,
      p2Subheading,
      p2,
      positionType
    } = this.props

    return <>
      <div
        className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'
      >

        <h4
          className='mb-6'
        >
          <Link
            as='/careers'
            href='/careers'
            shallow
          >
            <a
              className='no-underline'
            >
              Careers
            </a>
          </Link>
        </h4>

        <div>
          <h3
            className='text-blue leading-snug'
          >
            {title}
          </h3>

          <h5
            className='mb-0 -mt-1'
          >
            {positionType} position
          </h5>
          <h6
            className='mb-8 -mt-1 text-sm text-accent-1'
          >
            Vancouver, New York, or remote
          </h6>
        </div>

        <p>
          {description}
        </p>

        <div
          className='mt-10 mb-2'
        >
          <div><strong>{p1Heading}</strong></div>
          <div
            className='mb-2 leading-normal'
          >{p1Subheading}</div>
        </div>
        <ul
          className='pool-list'
          dangerouslySetInnerHTML={{
            __html: p1
          }}
        />

        <div className='mt-8'>
          <div><strong>{p2Heading}</strong></div>
          <div
            className='mb-2 leading-normal'
          >{p2Subheading}</div>
        </div>

        <ul
          className='pool-list'
          dangerouslySetInnerHTML={{
            __html: p2
          }}
        />

        <div
          className='mt-10'
        >
          <ButtonLink
            as={`mailto:careers@pooltogether.com?subject=${titleEmail}`}
            href={`mailto:careers@pooltogether.com?subject=${titleEmail}`}
          >
            Apply now
          </ButtonLink>
        </div>

        <p
          className='mt-8'
        >
          If you're interested in a position, apply to <a
            href={`mailto:careers@pooltogether.com?subject=${titleEmail}`}
          >careers@pooltogether.com</a> with your resume, Github profile, Dribbble portfolio, or any other relevant information.
        </p>
      </div>
    </>
  }

}