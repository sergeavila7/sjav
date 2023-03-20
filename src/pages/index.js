import React from 'react';
import Seo from '../components/Seo';
import Banner from '../components/Banner';
import BannerMe from '../assets/images/BannerMe.png';

import { projectsHome } from '../shared/catalogues';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Banner
      img={BannerMe}
      alt='Desarrollo web'
      title='Frontend Developer'
      description='Sergio Avila'
      to='/about'
      button='Conoce más sobre mí...'
    />
    <section className='home mt-5'>
      <div className='container-fluid'>
        <div className='col-12 col-md-8 row'>
          <div className='presentation pt-5'>
            <small className='presentation__title py-2'>Acerca de mí</small>
            <p className='presentation__description pt-5'>
              Hola, Soy Sergio Avila, Ingeniero en Sistemas y Telecomunicaciones
              y Desarrollador web Frontend.
            </p>
            <h3 className='presentation__title py-5'>
              Algunos de mis trabajos
            </h3>
          </div>
          <div className='presentation__work'>
            <ul>
              {projectsHome.map((project) => (
                <li>
                  <a href={project.href} target='_blank' rel='noreferrer'>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
