import React from 'react';

import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <h2>Palestra e Mesa redonda</h2>
      <h1>
        Construindo as melhores aplicações com
        {' '}
        <br />
        {' '}
        JavaScript moderno
      </h1>
      <div className="event-information-container">
        <div>
          <span>
            Data:
          </span>
          12/10/2025
        </div>
        <div>
          <span>
            Horario:
          </span>
          16h
        </div>
        <div>
          <span>
            Local:
          </span>
          Sao Paulo
        </div>
        <button onClick={() => { window.location.href = '#form'; }} type="button">
          INSCREVA-SE
        </button>
      </div>
    </div>
  );
}

export default Header;
