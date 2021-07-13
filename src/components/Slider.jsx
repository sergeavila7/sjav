import React from 'react';
import { Carousel } from 'react-bootstrap';
export const Slider = () => {
  return (
    <div className='slider mx-auto'>
      <Carousel className='d-flex justify-content-center' fade>
        <Carousel.Item>
          <img
            className='d-flex w-100'
            src='https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
            alt='First slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-flex w-100'
            src='https://images.unsplash.com/photo-1590103514924-009a76183beb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt='Second slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-flex w-100'
            src='https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt='Third slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
