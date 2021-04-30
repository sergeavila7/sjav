import React from 'react';
import SEO from '../components/Seo';
import Banner from '../components/Banner';
import Form from '../components/Form'
const Contact = () => (
  <>
      <SEO title='Contact' />
      <Banner
      url='https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      title='Contacto'
      description='Si necesitas una página y/o aplicación web solo llena el formulario que se encuentra en la parte de abajo y me pondre en contacto contigo, o puedes mandar un correo.'
      button='Enviar correo.'
      />
      <Form/>
  </>
)

export default Contact;
