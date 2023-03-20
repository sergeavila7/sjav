import React from 'react';
export const ProjectsBanner = (props) => {
  return (
    <div className='Project text-lg-left  mx-auto'>
      <h2 className='title'>{props.title}</h2>
      <p className='description mt-2 text-lg-left p-0 ml-0 col-12 col-lg-10'>
        {props.description}
      </p>
      <span></span>
    </div>
  );
};
