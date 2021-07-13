import React from 'react';
import {
  FaTwitter,
  FaGithub,
  FaTwitch,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer mt-5'>
      <div className='container col-12'>
        <section>
          <div className='container__socials'>
            <ul>
              <li>
                <a
                  href='https://twitter.com/serge_avila7'
                  target='_blank'
                  className='twitter'
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/sergeavila7'
                  target='_blank'
                  className='github'
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitch.tv/serge_avila7'
                  target='_blank'
                  className='twitch'
                >
                  <FaTwitch />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/serge_avila7/'
                  target='_blank'
                  className='instagram'
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/sergio-avila-4644b9201/'
                  target='_blank'
                  className='linkedin'
                >
                  <FaLinkedin />
                </a>
              </li>
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
