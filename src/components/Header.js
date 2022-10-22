import React from 'react';
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <p className='product-name'>Pufi</p>
      </div>
      <div className='header-navbar-container'>
        <div>PUFI Rain <span class="material-symbols-outlined">
          umbrella
        </span></div>
        <div>PUFI Puff <span class="material-symbols-outlined">
          weekend
        </span></div>
        <div>PUFI Cart<span class="material-symbols-rounded">
          shopping_bag
        </span></div>
        <div>PUFI Nap <span class="material-symbols-outlined">
          backpack
        </span></div>
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