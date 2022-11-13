import React from 'react'
import Slider from 'react-slick'
import avatar1 from '../../../assets/images/ava-1.jpg'
import avatar2 from '../../../assets/images/ava-2.jpg'
import avatar3 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll : 1
    }
  return (
    <Slider {...settings}>
      <div>
        <p className="reviewText">
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, a! Deserunt, sed temporibus? Laboriosam, distinctio facere enim blanditiis, corrupti dolore consequuntur sint esse eveniet quasi porro assumenda officiis earum adipisci.'
        </p>
        <div className='sliderContent align-items-center d-flex gap-3'>
            <img src={avatar1} alt="" className='rounded' />
            <h6>Michael Parenti</h6>
        </div>
      </div>
        <div>
            <p className="reviewText">
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, a! Deserunt, sed temporibus? Laboriosam, distinctio facere enim blanditiis, corrupti dolore consequuntur sint esse eveniet quasi porro assumenda officiis earum adipisci.'
            </p>
            <div className='sliderContent align-items-center d-flex gap-3'>
                <img src={avatar2} alt="" className='rounded' />
                <h6>Marie Chichilco</h6>
            </div>
        </div>
      <div>
            <p className="reviewText">
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, a! Deserunt, sed temporibus? Laboriosam, distinctio facere enim blanditiis, corrupti dolore consequuntur sint esse eveniet quasi porro assumenda officiis earum adipisci.'
            </p>
            <div className='sliderContent align-items-center d-flex gap-3'>
                <img src={avatar3} alt="" className='rounded' />
                <h6>Ernie Guevara</h6>
            </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
