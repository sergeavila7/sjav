import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export const Cards = (props) => {
  return (
    <div className='card d-flex mx-auto '>
      <div className='card__header'>
        <div className='card__title'>
          <h2>{props.title}</h2>
        </div>
        <div className='card__icons'>
          <ul>{props.icons}</ul>
        </div>
      </div>
      <div className='card__img' alt={props.title}>
        <img src={props.img} loading='lazy' alt={props.title} />
      </div>
      <div className='card__body'>
        <p className='card__description mt-4'>{props.description}</p>
        <div className='card__buttons'>
          <Button
            className='btn btn-danger col-9 mx-1'
            href={props.demo}
            target='_blank'
          >
            Ver Proyecto
          </Button>
          <Button
            className='btn btn-light col-2 mx-1'
            href={props.github}
            target='_blank'
          >
            <i className='card__icons--github'>
              <FaGithub />
            </i>
          </Button>
        </div>
      </div>
    </div>
  );
};
