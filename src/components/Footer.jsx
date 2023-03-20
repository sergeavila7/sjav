import React from 'react';

import { socials } from '../shared/catalogues';

const Footer = () => {
  return (
    <footer className='footer mt-5'>
      <div className='container col-12'>
        <section>
          <div className='container__socials'>
            <ul>
              {socials.map((social) => (
                <li>
                  <a
                    href={social.href}
                    target='_blank'
                    className={social.className}
                    rel='noreferrer'
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className='SJAV text-center d-none d-lg-block'>
        ©Desarrollador SJAV 2021 | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
