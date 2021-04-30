import React from 'react';
import SEO from '../components/Seo';
import Banner from '../components/Banner';
// import "../components/background.js"

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Banner
      url='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      title='Frontend Developer'
      description='Sergio Avila'
      button='Conoce más sobre mí...'
    />
    <section className="home mt-5">
    <div className="container-fluid">
    <div className="col-12 col-md-6 row">
    <div className="presentation pt-5">
    <small className="presentation__title py-2" >Acerca de mí</small>
    <p className="presentation__description pt-5">Hola, Soy Sergio Avila, Ingeniero en Sistemas y Telecomunicaciones. 
    Tengo un gran interes en la Programación y en el Desarrollo Web. </p>
    <h3 className="presentation__title py-5">Algunos de mis trabajos</h3>
    </div>
    <div className="presentation__work">
    <ul>
    <li>
    <a>
    Petgram
    </a>
    </li>
    <li>
    <a>
    Petgram
    </a>
    </li>
   <li>
    <a>
    Petgram
    </a>
    </li>
   <li>
    <a>
    Petgram
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
