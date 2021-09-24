import React from 'react'
import Slider from 'react-slick'

const Slide = (props) => {
  return (
    <div>
      <div className='wrapper inline-block'>
        <a href={props.href} target='_blank' className='inline-block'>
          <img src={props.imgSrc} className='mx-0 rounded-xl trans mr-0' />
        </a>
      </div>
    </div>
  )
}

export const IndexTweetSlideshow = () => {
  var settings = {
    className: 'center',
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: 'ease',
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 940,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='py-4 bg-slick-slide w-full'>
      <Slider {...settings}>
        <Slide
          href='https://twitter.com/gavinandresen/status/1212467515668008962'
          imgSrc='/gavin-tweet-1212467515668008962.png'
        />
        <Slide
          href='https://twitter.com/VitalikButerin/status/1278337661988716547'
          imgSrc='/vitalik-tweet-1278337661988716547.png'
        />
        <Slide
          href='https://twitter.com/jordanfrankfurt/status/1440756330327789580'
          imgSrc='/jordan-tweet-1440756330327789580.png'
        />
        <Slide
          href='https://twitter.com/gavinandresen/status/1212467515668008962'
          imgSrc='/gavin-tweet-1212467515668008962.png'
        />
        <Slide
          href='https://twitter.com/VitalikButerin/status/1278337661988716547'
          imgSrc='/vitalik-tweet-1278337661988716547.png'
        />
        <Slide
          href='https://twitter.com/jordanfrankfurt/status/1440756330327789580'
          imgSrc='/jordan-tweet-1440756330327789580.png'
        />
      </Slider>
    </div>
  )
}
