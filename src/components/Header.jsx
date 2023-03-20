import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo__container'>
          <Link to='/'>
            <h2 className='logo' data-text='SA'>
              SA
            </h2>
          </Link>
        </div>
        <div className='container__menu'>
          <ul className='menu'>
            <Link to='/'>Inicio</Link>
            <Link to='/projects'>Proyectos</Link>
            <Link to='/about'>Sobre mí</Link>
            <Link to='/contact'>Contacto</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
