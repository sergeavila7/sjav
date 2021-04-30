import React from 'react';
import { Logo } from '../images/icon.png';
import { Link } from 'gatsby';
import '../styles/styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo__container'>
          <Link to='/'>
            <h2 className="logo" data-text="SA">SA</h2>
          </Link>
        </div>
        <input type='checkbox' id='nav' className='hidden' />
        <label for='nav' className='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className='wrapper'>
          <ul className='menu'>
            <Link to='/'>Inicio</Link>
            <Link to='/projects'>Projectos</Link>
            <Link to='/about'>Sobre mí</Link>
            <Link to='/contact'>Contacto</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
