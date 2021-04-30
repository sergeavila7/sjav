import React from 'react';
import SEO from '../components/Seo';
import {Gallery} from '../components/Gallery';

const About = () => (
  <>
    <SEO title='About' />
    <Gallery/>
    <section className="about pt-2 mt-5 pl-5">
    <div className="container-fluid">
    <div className="col-12 col-md-8 mt-5 row">
    <div className="about__container">
    <small className="about__title--mini pt-5">Acerca de mi</small>
    <h3 className="about__title--me py-4">SJAV</h3>
    <p>Soy Ingeniero en Sistemas y Telecomunicaciones (titulo en proceso...) originario de México con un gran interes en la Tecnología y el Desarrollo Web  </p>
    <p>Mi primer acercamiento con el Desarrollo Web fue en el bachillerato, pero cuando realmente tuve un gran interes fue cuando tuve mi primer clase de programación en la Universidad. Mi primer lenguaje de programaciónfu C y poco tiempo despues aprendí Java y Poo, posteriomente me adentre a las Bases de Datos en MySql y SQL.
    Ahí fue cuando me dí cuenta del gran gusto que tenía por esta gran mundo de la programación.</p>
    <p>Estuve cerca de 1 año trajando en el área de Telecomunicaciones y al mismo tiempo tomando cursos en Udemy de Desarrollo Web, gracias al tiempo invertido en esos cursos logré tener mis primeros proyectos de freelance (no eran demasiado buenos, pero era todo un novato) decidí dar un cambio y entre de lleno al Desarrollo Web y a seguir preparandome pero ahora en Platzi, donde he logrado pulir y adquirir más habilidades para convertirme en un Desarrollador más profesional.</p>
    <h3 className="about__title--more py-4">Conoce más sobre mí...</h3>
    <p>La Universidad me brindo todas la bases y fundamentos de la Programación y en Base de Datos, pero me he tenido que dedicar a investigar en INTERNET todo acerca del Desarrollo Web. Pasando por YouTube, Udemy y Platzi. </p>
    <p>Disfruto mucho de los videojuegos, del ejercicio y mi gran pasión desde niño, la MUSICA... (considere algun tiempo estudiar algo relacionado pero gano mi gusto la Tecnología).</p>
    <p>Algunos de mis gustos estan plasmados en las imagens como la MUSICA, LUCHA LIBRE, VIDEOJUEGOS, HACER EJERCICO Y CUIDAR DE TU SALUD, MI GRAN AMOR POR LOS ANIMALES ❤🐶🐱 (actualmente tengo 2 perros y 5 gatos 😅).</p>
    </div>
    
    </div>
    </div>
    </section>
  </>
);

export default About;
