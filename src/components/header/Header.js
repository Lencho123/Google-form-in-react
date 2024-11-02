import React from 'react';
import './header.css';
import linc from './linc.jpg';

export default function Header() {
  return (
      <header className='header'>
        <div className='h1'>
        <h1> Trees Check-Point</h1>
        </div>
        <div className='pi'>
          <p><strong>lencholachisa11@gmail.com</strong> <span className='switch'>Switch account</span></p>
          <img src={linc} alt="Kaneh" />
        </div>
        <div className='p'>
          <p>* Indicates required question</p>
        </div>
      </header>
  )
}
