import React from 'react';
import { Link } from 'gatsby';

const Banner = (props) => {
  return (
    <main
      className='banner'
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className='overlay'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 offset-md-0 text-center text-md-left'>
              <small>Portfolio</small>
              <h2 className='title fadeInDown'>{props.title}</h2>
              <p className='content d-md-block fadeInUp'>{props.description}</p>
              <Link className='btn btn-outline-light fadeInUp' to='/about'>
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
