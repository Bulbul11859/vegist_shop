import React from 'react';
import { Carousel  } from 'react-bootstrap';
import Slider1 from '../assets/Img/slider1.png';

const Banner = () => {
  return (
   
      <Carousel style={{marginTop:'14px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
        <p>Top Selling</p>
        <h3>Fresh for your health</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Top Selling</p>
          <h3>Fresh for your health</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p>Top Selling</p>
          <h3>Fresh for your health</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Banner
