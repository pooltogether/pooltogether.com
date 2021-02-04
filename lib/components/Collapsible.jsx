import React, { Component } from 'react'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'

export const Collapsible = class _Collapsible extends Component {
  state = {
    active: false
  }

  render() {
    const buttonProps = {
      onClick: (e) => {
        this.setState({ active: !this.state.active })
      },
    }

    return (
      <div
        className={classnames(
          'trans px-10 sm:px-10 -mx-10',
          {
            ' py-4 -my-4 mb-4 shadow-lg-alt': this.state.active,
            '': !this.state.active,
          }
        )}
      >
        <div
          {...buttonProps}
          className={classnames(
            'flex cursor-pointer collapsible-target -mx-16 px-16 sm:-mx-10 sm:px-10 hover:bg-accent-grey-1 rounded-full pt-1',
            {
              'bg-accent-grey-1 text-white': this.state.active,
              'text-highlight-2': !this.state.active,
            }
          )}
        >
          <span
            className={classnames(
              'inline-block text-left text-sm sm:text-base md:text-lg lg:text-xl pb-0 w-4/5  trans active:outline-none focus:outline-none', {
              'text-white': this.state.active,
              'text-highlight-2': !this.state.active,
            }
            )}
          >
            {this.props.title}
          </span>

          <span
            className={classnames(
              'inline-block text-right text-sm sm:text-base md:text-lg lg:text-xl pt-1 w-1/5 hover:text-purple trans active:outline-none focus:outline-none'
            )}
          >
            <span
              className={classnames(
                'inline-block ml-auto rounded trans',
                {
                  'text-white': this.state.active,
                  '': !this.state.active
                }
              )}
            >
              <FeatherIcon
                icon='chevron-up'
                className={classnames(
                  'ml-auto trans w-4 h-4 sm:w-8 sm:h-8',
                  {
                    'text-green rotate-0': !this.state.active,
                    'text-white rotate-180': this.state.active
                  }
                )}
              />
            </span>
          </span>

        </div>

        <p
          // dangerouslySetInnerHTML={{
          //   __html: this.props.content
          // }}
          className={classnames(
            'text-xs sm:text-sm md:text-base',
            'my-4',
            'collapsible-content',
            {
              'collapsible-content--active': this.state.active
            }
          )}
        >
          {this.props.children}
        </p>
      </div>
    )
  }
}
