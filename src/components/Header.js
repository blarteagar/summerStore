import React from 'react';
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <p className='product-name'>Pufi</p>
      </div>
      <div className='header-navbar-container'>
        <div>PUFI Rain</div>
        <div>PUFI Puff</div>
        <div>PUFI Cart</div>
        <div>PUFI Nap</div>
      </div>
      <div className='header-log-container'>
        <p>HOME | MY CART</p>
      </div>
      <div className='header-title-container'>
        <h1>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
      </div>
    </div>

  );
}

export default Header;   