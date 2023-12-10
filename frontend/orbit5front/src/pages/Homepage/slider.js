import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Styles/Slider.css'

import image1 from './../../assets/image1.jpg';
import image2 from './../../assets/image2.jpg';
import image3 from './../../assets/image3.jpg';

const Slider = () => {
  return (
      <><div >
          <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2500}>
              <div className='mainframe'>
              <img
                  className="d-block w-100"
                  src={image2}
                  alt="First slide" />
              <Carousel.Caption>
                  <h3>Advisor Yennefer Parker</h3>
                  <p>Sucess is a combination of small droplets of achievments.</p>
              </Carousel.Caption>
              </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
          <div className='mainframe'>
              <img
                  className="d-block w-100"
                  src={image1}
                  alt="Third slide" />
              <Carousel.Caption>
                  <h3>Senior Advisor Steve Rogers</h3>
                  <p>Be the change that you wish to see in the world.</p>
              </Carousel.Caption>
              </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
          <div className='mainframe'>
              <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide" />
              <Carousel.Caption>
                  <h3>Advisor Shawn Smith</h3>
                  <p>It is never too late to be what you might have been.</p>
              </Carousel.Caption>
              </div>
          </Carousel.Item>
      </Carousel></div></>
  )
}

export default Slider;