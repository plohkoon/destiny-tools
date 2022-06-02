import React from 'react';
import '../styles/header.scss';

import icon from '../assets/icon.png'

export default function Header({ menuOpen, setMenuOpen }) {

  return (
    <header className='header'>
      <div className='titles'>
        <img src={icon} alt='' />
        <h1>Destiny Tools</h1>
      </div>
      <button className={`hamburger hamburger--slider${menuOpen ? ' is-active' : ''}`} onClick={e => setMenuOpen(!menuOpen)}>
        <span className='hamburger-box'>
          <span className='hamburger-inner' />
        </span>
      </button>
    </header>
  )

}