import React from 'react';
import Seo from '../components/Seo';
import { Main } from '../components/Main';
import Me from '../assets/images/Me.jpeg';

import '../assets/styles/styles.scss';

const About = () => (
  <>
    <Seo title='About' />
    <section className='about p-5'>
      <div className='row'>
        <div className='mx-auto'>
          <p className='about__title--mini text-center'>Acerca de mi</p>
          <h3 className='about__title--me text-center'>SJAV</h3>
          <div className='img__container'>
            <img src={Me} alt='me' loading='lazy' />
          </div>
        </div>
      </div>
      <div className='about__container container-fluid'>
        <div className='about__description col-12 col-md-8'>
          <p>
            Mi nombre es Sergio Joaquín Avila Vazquez y soy Ing.en Sistemas y
            Comunicaciones, originario de México con un gran interes en la
            Tecnología y el Desarrollo Web
          </p>
          <p>
            Estudie en la Universidad Autonoma del Estado de Mexico, donde nacio
            mi interes por ser programador. Posteriormente me apoye de
            plataformas como Udemy y Platzi para continuar mi camino como
            Desarrollador Frontend, donde cuento con mas de 2 años de
            experiencia. He adquirido conocimientos en React, Angular, Jest,
            NextJS, GatsbyJS, CSS, SCSS, Bootstrap y Tailwind entre otras
            tecnologías.
          </p>
          <h3>Educación</h3>
          <li>UAEM</li>
          <p>Ing.Sistemas y Comunicaciones</p>
          <p>2015-2020</p>
          <li>Udemy</li>
          <p>Desarrollador Web</p>
          <li>Platzi</li>
          <p>Frontend Developer</p>
        </div>
        <div className='about__skills col-12 col-md-4'>
          <h2 className='text-center'>Technical Skills</h2>
          <Main />
          <h2 className='text-center'>Soft Skills</h2>
          <div className='about__skills--soft d-flex justify-content-center'>
            <ul>
              <li>Autodidacta</li>
              <li>Responsable</li>
              <li>Adaptabilidad</li>
              <li>Ingles B1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
