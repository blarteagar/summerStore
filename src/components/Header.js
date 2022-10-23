import React from 'react';
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <p>Pufi</p>
      </div>
      <div className='header-navbar-container'>
        <div><div class="material-symbols-outlined">
          umbrella
        </div>PUFI Rain </div>
        <div><div class="material-symbols-outlined">
          weekend
        </div>PUFI Puff </div>
        <div><div class="material-symbols-rounded">
          shopping_bag
        </div>PUFI Cart</div>
        <div><div class="material-symbols-outlined">
          backpack
        </div>PUFI Nap</div>
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