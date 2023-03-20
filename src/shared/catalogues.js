import React from 'react';
// Images
import platziSwag from '../assets/images/PlatziSwag.png';
import petgram from '../assets/images/Petgram.png';
import CRUD from '../assets/images/Crud.png';
import CRM from '../assets/images/Crm.png';
import natura from '../assets/images/Natura.png';
import naturaME from '../assets/images/NaturaME.png';
import mernTasks from '../assets/images/MERNTasks.png';
import crmGraphql from '../assets/images/CRM-Graphql.png';
// Icons
import { GrGatsbyjs } from 'react-icons/gr';
import {
  FaReact,
  FaSass,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNode,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiStyledComponents,
  SiWebpack,
  SiBabel,
  SiGraphql,
  SiMongodb,
} from 'react-icons/si';

const projectsHome = [
  {
    href: 'https://crudsjav.netlify.app/',
    title: 'CRUD',
  },
  {
    href: 'https://crmsjav.netlify.app/',
    title: 'CRM',
  },
  {
    href: 'https://crmsjav.netlify.app/',
    title: 'MernTaks',
  },
  {
    href: 'https://crmsjav.netlify.app/',
    title: 'CRM con GraphQL',
  },
];

const projects = [
  {
    img: natura,
    title: 'Natura Red Omega',
    icons: (
      <>
        <GrGatsbyjs /> <FaReact /> <FaBootstrap /> <FaSass />
      </>
    ),
    description:
      'Sitio web Responsive para líder de Natura Red Omega realizado y optimizado con GatsbyJS.',
    demo: 'https://naturaredomega-sv.netlify.app/',
    github: 'https://github.com/sergeavila7/GatsbyNaturaSV',
  },
  {
    img: naturaME,
    title: 'Natura Red Omega',
    icons: (
      <>
        <GrGatsbyjs /> <FaReact /> <FaBootstrap /> <FaSass />
      </>
    ),
    description:
      'Sitio web Responsive para líder de Natura Red Omega realizado y optimizado con GatsbyJS.',
    demo: 'https://naturaredomega-ma.netlify.app/',
    github: 'https://github.com/sergeavila7/GatsbyNaturaME',
  },
  {
    img: platziSwag,
    title: 'PlatziSwag',
    icons: (
      <>
        <GrGatsbyjs /> <FaReact /> <SiStyledComponents /> <SiGraphql />
      </>
    ),
    description:
      'Ecommerce realizado con GatsbyJs y Graphql. Estilos implementados con Styled-Components e implementación de Stripe para control de pagos y productos.',
    demo: 'https://ps-sergeavila.netlify.app/',
    github: 'https://github.com/sergeavila7/GatsbyPlatzi',
  },
  {
    img: petgram,
    title: 'Petgram',
    icons: (
      <>
        <FaReact /> <SiWebpack /> <SiBabel /> <SiStyledComponents />
      </>
    ),
    description:
      'Clon de Instagram realizado con ReactJs y estilos implementados con Styled-Components. Autenticación realizada con JWT.',
    demo: 'https://petgram-sjav.netlify.app/',
    github: 'https://github.com/sergeavila7/petgram',
  },
  {
    img: CRUD,
    title: 'Control de Empleados',
    icons: (
      <>
        <FaReact /> <FaSass /> <FaBootstrap />
        <SiMongodb />
        <FaNode />
      </>
    ),
    description:
      'CRUD para el control de Empleados realizado con el Stack MERN.',
    demo: 'https://crud-sjav.netlify.app/',
    github: 'https://github.com/sergeavila7/crud-frontend',
  },
  {
    img: CRM,
    title: 'CRM',
    icons: (
      <>
        <FaReact /> <FaSass /> <FaBootstrap /> <SiMongodb /> <FaNode />
      </>
    ),
    description:
      'CRM realizado con el Stack MERN. Credenciales de acceso: serge_avila@gmail.com, password: 123456',
    demo: 'https://crmsjav.netlify.app/login',
    github: 'https://github.com/sergeavila7/crm-frontend',
  },
  {
    img: mernTasks,
    title: 'MernTasks',
    icons: (
      <>
        <FaReact /> <FaSass /> <FaBootstrap /> <SiMongodb /> <FaNode />
      </>
    ),
    description:
      'MernTasks lleva el control de tus proyectos y tareas. Desallorado con React, Bootstrap, Express, MongoDB y Node',
    demo: 'https://merntasks-sjav.netlify.app/',
    github: 'https://github.com/sergeavila7/merntasks-frontend',
  },
  {
    img: crmGraphql,
    title: 'CRM con GraphQL',
    icons: (
      <>
        <FaReact /> <SiGraphql /> <SiMongodb /> <FaNode />
      </>
    ),
    description:
      'CRM realizado con GraphQL e implementación de gráficas. Credenciales de acceso: serge_avila@gmail.com, password: 123456',
    demo: 'https://crm-grapqhl.netlify.app/login',
    github: 'https://github.com/sergeavila7/graphql-client',
  },
];

const socials = [
  {
    href: 'https://www.linkedin.com/in/sergio-avila-4644b9201/',
    className: 'linkedin',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/sergeavila7',
    className: 'github',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.instagram.com/serge_avila7',
    className: 'instagram',
    icon: <FaInstagram />,
  },
];

export { projects, projectsHome, socials };
