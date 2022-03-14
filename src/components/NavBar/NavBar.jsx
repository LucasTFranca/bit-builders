import React from 'react';
import { MdMail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import logo from '../../images/logo.svg';

import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo da empresa" />
      <div className="contact-button-container">
        <MdMail />
        <button type="button" id="email-button" className="contact-button">
          E-mail
        </button>
        <BsTelephoneFill />
        <button type="button" className="contact-button">
          Telefone
        </button>
      </div>
    </div>
  );
}

export default NavBar;
