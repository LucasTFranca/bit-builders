import React from 'react';
import MichaelSummerImage from '../../images/MichaelSummer.png';
import EricoSuarezImage from '../../images/EricoSuarez.png';
import LauraMotwaniImage from '../../images/LauraMotwani.png';

import './Lecture.css';

function Lecture() {
  return (
    <div className="lecture-container">
      <h1>Palestrantes</h1>
      <div className="highlight" />
      <div className="image-container">
        <div>
          <img src={MichaelSummerImage} alt="imagen do MichaelSummer" />
          <h2>Michael Summer</h2>
          <h3>Front-End Engineer</h3>
        </div>
        <div>
          <img src={EricoSuarezImage} alt="imagen do EricoSuarez" />
          <h2>Erico Suarez</h2>
          <h3>Full Stack Developer</h3>
        </div>
        <div>
          <img src={LauraMotwaniImage} alt="imagen do LauraMotwani" />
          <h2>Laura Motwani</h2>
          <h3>Art Director</h3>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
