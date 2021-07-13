import React from 'react';
import SEO from '../components/Seo';
import Banner from '../components/Banner';
import BannerMe from '../assets/images/BannerMe.png';
import '../assets/styles/styles.scss';
const IndexPage = () => (
  <>
    <SEO title='Home' />
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
              Hola, Soy Sergio Avila, Ingeniero en Sistemas y Comunicaciones.
              Tengo un gran interes en la Programación y en el Desarrollo Web.{' '}
            </p>
            <h3 className='presentation__title py-5'>
              Algunos de mis trabajos
            </h3>
          </div>
          <div className='presentation__work'>
            <ul>
              <li>
                <a href='https://crmsjav.netlify.app/' target='_blank'>
                  CRM
                </a>
              </li>
              <li>
                <a href='https://crudsjav.netlify.app/' target='_blank'>
                  CRUD
                </a>
              </li>
              <li>
                <a
                  href='https://naturaredomgea-av.netlify.app/'
                  target='_blank'
                >
                  Natura
                </a>
              </li>
              <li>
                <a href='https://ps-sergeavila.netlify.app/' target='_blank'>
                  PlatziSwag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
