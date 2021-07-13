import React from 'react';
import SEO from '../components/Seo';
import { ProjectsBanner } from '../components/ProjectsBanner';
import { Slider } from '../components/Slider';
import { Cards } from '../components/Cards';
import Natura from '../assets/images/Natura.png';
import Petgram from '../assets/images/Petgram.png';
import PlatziConf from '../assets/images/PlatziConf.png';
import PlatziSwag from '../assets/images/PlatziSwag.png';
import CRUD from '../assets/images/Crud.png';
import CRM from '../assets/images/Crm.png';
import { GrGatsbyjs } from 'react-icons/gr';
import { FaReact, FaSass, FaPaypal, FaNode, FaBootstrap } from 'react-icons/fa';
import {
  SiStyledComponents,
  SiWebpack,
  SiBabel,
  SiGraphql,
  SiMongodb,
} from 'react-icons/si';
import '../assets/styles/styles.scss';

function Projects(props) {
  return (
    <>
      <SEO title='Projects' />
      <section className='projects mb-5'>
        <div className='container mx-auto'>
          <div className='row'>
            <div className='project__banner col-12 col-lg-6'>
              <ProjectsBanner
                title='Proyectos'
                description='Te invito a observar algunos de mis proyectos realizados con el Stack Mern, prueba las demos y no olvides de visitar mi GitHub para más información acerca del codigo.'
              />
            </div>
            <div className='carousel col-12 col-lg-6'>
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <section className='cards mx-auto'>
        <div className='container-fluid row col-12'>
          <Cards
            img={PlatziSwag}
            title='PlatziSwag'
            icons={
              <i>
                <GrGatsbyjs /> <FaReact /> <SiStyledComponents /> <SiGraphql />
              </i>
            }
            description='Ecommerce realizado con GatsbyJs y Graphql. Estilos implementados con Styled-Components e implementación de Stripe para control de pagos y productos.'
            demo='https://ps-sergeavila.netlify.app/'
            github='https://github.com/sergeavila7/GatsbyPlatzi'
          />
          <Cards
            img={PlatziConf}
            title='PlatziConf'
            icons={
              <i>
                <FaReact /> <FaSass /> <SiWebpack /> <SiBabel /> <FaPaypal />
              </i>
            }
            description='Ecommerce realizado con ReactJs y estilos implementados con SASS. Uso de React Hooks y API de PayPal.
            Para el Backend se utilizo Strappi.'
            demo='https://platziconfmerch.netlify.app/'
            github='https://github.com/sergeavila7/PlatziConfMerch'
          />
          <Cards
            img={Petgram}
            title='Petgram'
            icons={
              <i>
                <FaReact /> <SiWebpack /> <SiBabel /> <SiStyledComponents />
                <SiGraphql />
              </i>
            }
            description='Clone de Instagram realizado con ReactJs y estilos implementados con Styled-Components. Autenticación realizada con JWT.'
            demo='https://petgram-sjav.netlify.app/'
            github='https://github.com/sergeavila7/petgram'
          />

          <Cards
            img={CRUD}
            title='Crud Control de Empleados'
            icons={
              <i>
                <FaReact /> <FaSass /> <FaBootstrap />
                <SiMongodb />
                <FaNode />
              </i>
            }
            description='CRUD para el control de Empleados realizado con el Stack MERN.
            Frontend realizado con ReactJs, SASS, SweetAlert2 y React-Bootstrap. Backend realizado con Express, MongoDB y Node. Deploy en Netlify y Heroku.'
            demo='https://crudsjav.netlify.app/'
            github='https://github.com/sergeavila7/CrudFrontend'
          />
          <Cards
            img={CRM}
            title='CRM'
            icons={
              <i>
                <FaReact /> <FaSass /> <FaBootstrap /> <SiMongodb /> <FaNode />
              </i>
            }
            description='CRM realizado con el Stack MERN.
            Frontend se implemento ReactJs, SASS, SweetAlert2 y React-Bootstrap. Backend realizado con Express, MongoDB y Node. Deploy en Netlify y Heroku.'
            demo='https://crmsjav.netlify.app/'
            github='https://github.com/sergeavila7/CrmFrontend'
          />
          <Cards
            img={Natura}
            title='Natura Red Omega'
            icons={
              <i>
                <GrGatsbyjs /> <FaReact /> <FaBootstrap /> <FaSass />
              </i>
            }
            description='Sitio web Responsive para líder de Natura Red Omega realizado y optimizado con Gatsby JS en conjunto con Sass y React-Bootstrap '
            demo='https://naturaredomgea-av.netlify.app/'
            github='https://github.com/sergeavila7/GatsbyNaturaAV'
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
