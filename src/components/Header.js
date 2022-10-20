import React from 'react';
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <p className='product-name'>PUFI</p>
      </div>
      <div className='header-navbar-container'>
        <p className='navbar-link'>PUFI Rain</p>
        <p className='navbar-link'>PUFI Puff</p>
        <p className='navbar-link'>PUFI Cart</p>
        <p className='navbar-link'>PUFI Nap</p>
      </div>
      <div className='header-log-container'>
        <p className='product-name'>HOME | MY CART</p>
      </div>
      <div className='header-title-container'>
        <h1>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
      </div>
    </div>

  );
}

export default Header;   