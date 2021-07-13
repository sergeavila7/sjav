import React from 'react';
import SEO from '../components/Seo';
import Banner from '../components/Banner';
import Form from '../components/Form';
import '../assets/styles/styles.scss';

const Contact = () => (
  <>
    <SEO title='Contact' />
    <Banner
      img='https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      alt='Imagen de contacto'
      title='Contacto'
      description='Si deseas una colaboración escribeme...'
      href='mailto:serge_avila7@yahoo.com'
      button='Enviar correo.'
    />
    <Form />
  </>
);

export default Contact;
