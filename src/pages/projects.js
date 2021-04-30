import React from 'react';
import SEO from '../components/Seo';
import {Main} from '../components/Main';
import {Cards} from '../components/Cards';
import '../styles/styles.scss';

const Projects = () => (

  <>
    <SEO title='Projects' />
    <Main/>
 <section className="cards">
        <div className='container-fluid'>
 <h2 className="cards__title text-center">Projects</h2>
          <div className='col-lg-12 row'>
    <Cards      
    img='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
/>
    <Cards      
    img='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
/>
    <Cards      
    img='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
/>
    <Cards      
    img='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
/>
   
   </div>
   </div>
   </section>
    
  </>
)

export default Projects;
