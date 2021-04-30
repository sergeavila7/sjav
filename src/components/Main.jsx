import React from 'react';
import '../styles/styles.scss';
import{FaGithub,FaHtml5,FaCss3Alt,FaSass,FaBootstrap,FaReact,FaNpm,FaLaravel,FaGitAlt} from 'react-icons/fa'
import{SiJavascript,SiTailwindcss,SiWebpack,SiBabel,SiGatsby,SiPhp,SiMysql} from 'react-icons/si'
import{DiResponsive} from 'react-icons/di'

export const Main = () => {
  return (
    <main className='main mb-4'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='main__title'>
              <h2>Skills</h2>
            </div>
            <div className='main__content'>
              <ul>
                <li>
              <FaHtml5 style={
        {
            color: '#F43600'
        }
    }/>
              </li>
                <li>
              <FaCss3Alt style={
        {
            color: '#3595CF'
        }
    }/>
              </li>
                <li>
              <FaSass style={
        {
            color: '#CE6B9E'
        }
    }/>
              </li>
                <li>
              <DiResponsive style={
        {
            color: '#fff'
        }
    }/>
              </li>
                <li>
              <FaBootstrap style={
        {
            color: '#533B78'

        }
    }/>
              </li>
                <li>
              <SiTailwindcss style={
        {
            color: '#17AFB3'
        }
    }/>
              </li>
                <li>
              <SiJavascript style={
        {
            color: '#EFD81D'
        }
    }/>
              </li>
                <li>
              <FaNpm style={
        {
            color: '#C53635'
        }
    }/>
              </li>
                <li>
              <FaGithub style={
        {
            color: '#fff'
        }
    }/>
              </li>
                <li>
              <FaGitAlt style={
        {
            color: '#E94E31'
        }
    }/>
              </li>
                <li>
              <SiWebpack style={
        {
            color: '#1B74BA'
        }
    }/>
              </li>
                <li>
              <SiBabel style={
        {
            color: '#F1D53C'
        }
    }/>
              </li>
                <li>
              <FaReact style={
        {
            color: '#5ED3F3'
        }
    }/>
              </li>
                <li>
              <SiGatsby style={
        {
            color: '#70498B'
        }
    }/>
              </li>
                <li>
              <SiMysql style={
        {
            color: '#5A839D'
        }
    }/>
              </li>
                <li>
              <SiPhp style={
        {
            color: '#7377AD'
        }
    }/>
              </li>
                <li>
              <FaLaravel style={
        {
            color: '#F34E39'
        }
    }/>
              </li>
           
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
