import React from 'react';
import './Header.scss';
import logo from '../../images/torunlarLogo.png';
import Form from '../Form/Form';

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__title-wrapper">
        <img 
          src={logo} 
          alt="torunlar logo"
          className="Header__logo"
        />
        <h1 className="Header__title">ISTANBUL</h1>
      </div>

      <div className="Header__info">
        <div className="Header__small-titles">
          <h2 className="Header__small-titles--upper">A PRIVILEGED LIFE WITH A</h2>
          <h2 className="Header__small-titles--lower">UNIQUE ISTANBUL VIEW</h2>
          <div className="Header__additional-info">
            <p className="Header__additional-info--lines">
              <span className="Header__additional-info--words">LIVE</span>
              <span className="Header__additional-info--words">WORK</span>
              <span>TOGETHER</span>
            </p>
            <p className="Header__additional-info--lines">RESIDANCE - OFFICE</p>
          </div>
        </div>

        <div className="Header__Form">
          <Form />
        </div>
      </div>
    </header>
  )
}
