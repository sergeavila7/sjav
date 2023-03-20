import React from 'react';
import { Carousel } from 'react-bootstrap';
// Images
import natura from '../assets/images/Natura.png';
import petgram from '../assets/images/Petgram.png';
import crm from '../assets/images/Crm.png';

export const Slider = () => {
  return (
    <div className='slider mx-auto'>
      <Carousel className='d-flex justify-content-center' fade>
        <Carousel.Item>
          <img className='banner__img d-flex w-100' src={natura} alt='First slide' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='banner__img d-flex w-100' src={petgram} alt='Second slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='banner__img d-flex w-100' src={crm} alt='Third slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
