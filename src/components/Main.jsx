import React from 'react';
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaNode,
  FaAngular,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiWebpack,
  SiGatsby,
  SiApollographql,
  SiGraphql,
} from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

export const Main = () => {
  return (
    <main className='main'>
      <div className='main__title'></div>
      <div className='main__content'>
        <ul>
          <li>
            <FaHtml5
              style={{
                color: '#F43600',
              }}
            />
          </li>
          <li>
            <FaCss3Alt
              style={{
                color: '#3595CF',
              }}
            />
          </li>
          <li>
            <FaSass
              style={{
                color: '#CE6B9E',
              }}
            />
          </li>

          <li>
            <FaBootstrap
              style={{
                color: '#533B78',
              }}
            />
          </li>
          <li>
            <SiTailwindcss
              style={{
                color: '#17AFB3',
              }}
            />
          </li>
          <li>
            <SiJavascript
              style={{
                color: '#EFD81D',
              }}
            />
          </li>

          <li>
            <FaGithub
              style={{
                color: '#fff',
              }}
            />
          </li>
          <li>
            <FaGitAlt
              style={{
                color: '#E94E31',
              }}
            />
          </li>
          <li>
            <SiWebpack
              style={{
                color: '#1B74BA',
              }}
            />
          </li>

          <li>
            <FaReact
              style={{
                color: '#5ED3F3',
              }}
            />
          </li>
          <li>
            <FaAngular
              style={{
                color: '#D2002F',
              }}
            />
          </li>
          <li>
            <SiGatsby
              style={{
                color: '#70498B',
              }}
            />
          </li>
          <li>
            <SiGraphql
              style={{
                color: '#D932A2',
              }}
            />
          </li>
          <li>
            <FaNode
              style={{
                color: '#539645',
              }}
            />
          </li>
          <li>
            <DiMongodb
              style={{
                color: '#6EAE5D',
              }}
            />
          </li>
          <li>
            <SiApollographql
              style={{
                color: '#102945',
              }}
            />
          </li>
        </ul>
      </div>
    </main>
  );
};
