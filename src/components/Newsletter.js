import React from 'react';
import '../stylesheets/Newsletter.css';

function Newsletter() {
  return (
    <div className='newsletter-container'>
      <div className='newsletter-title'>
        <p>SUSCRIBITE</p>
      </div>
      <div className='newsletter-description'>
      <p>Agrega tu correo electrónico</p>
      <input className='ńewsletter-input' type='email' placeholder='tu correo electrónico'></input>
      </div>
    </div>

  );
}

export default Newsletter;     