import React from 'react';
import Seo from '../components/Seo';
import { ProjectsBanner } from '../components/ProjectsBanner';
import { Slider } from '../components/Slider';
import { Cards } from '../components/Cards';

import { projects } from '../shared/catalogues';

const Projects = () => {
  return (
    <>
      <Seo title='Projects' />
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
          {projects.map((project) => (
            <Cards
              img={project.img}
              title={project.title}
              icons={project.icons}
              description={project.description}
              demo={project.demo}
              github={project.github}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
