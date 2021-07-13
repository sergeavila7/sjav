import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo__container'>
          <Link to='/'>
            <h2 className='logo text-center' data-text='SA'>
              SA
            </h2>
          </Link>
        </div>
        <div className='container__menu'>
          <ul className='menu'>
            <Link to='/'>Inicio</Link>
            <Link to='/Projects'>Projectos</Link>
            <Link to='/About'>Sobre mí</Link>
            <Link to='/Contact'>Contacto</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
