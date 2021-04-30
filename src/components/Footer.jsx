import React from 'react';
import '../styles/styles.scss';

const Footer = () => {
  return (
    <footer className='footer mt-5'>
      <link
        href='//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css'
        rel='stylesheet'
      />

      <div className='container'>
        <div className='container__socials pt-5'>
        <div className="row">
          <div className='col-lg-12'>
              <ul>
                <li>
                  <a href='#' className='twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='github'>
                    <i class="fab fa-github"></i>                  </a>
                </li>
                <li>
                  <a href='#' className='twitch'>
                  <i class="fab fa-twitch"></i>                 
                   </a>
                </li>
                <li>
                  <a href='#' className='instagram'>
<i class="fab fa-instagram"></i> </a>
                </li>
                <li>
                  <a href='#' className='linkedin'>
<i class="fab fa-linkedin"></i> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        ©Desarrollador SJAV 2021 🐱‍👤 | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
