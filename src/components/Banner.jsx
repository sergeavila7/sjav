import React from 'react';
import { Link } from 'gatsby';

const Banner = (props) => {
  return (
    <main
      className='banner'
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div className='overlay'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 offset-md-0 text-center text-md-left'>
              <small>Portfolio</small>
              <h2 className='title fadeInDown my-2'>{props.title}</h2>
              <h3 className='content d-md-block fadeInUp'>{props.description}</h3>
              <Link className='btn btn-outline-light fadeInUp' to={props.to} href={props.href} target="_blank" alt={props.alt}>
                {props.button}
              </Link>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
