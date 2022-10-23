import React from 'react';
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <p>Pufi</p>
      </div>
      <div className='header-navbar-container'>
        <div className='navbar-item'>
        <div class="material-symbols-outlined">
          weekend
        </div>PUFI PUFF</div>
        <div div className='navbar-item'>
        <div class="material-symbols-outlined">
          umbrella
        </div>PUFI RAIN</div>
        <div div className='navbar-item'>
        <div class="material-symbols-rounded">
          shopping_bag
        </div>PUFI CART</div>
        <div div className='navbar-item'>
        <div class="material-symbols-outlined">
          backpack
        </div>PUFI NAP</div>
      </div>
      <div className='header-log-container'>
        <p>MI CUENTA | MI COMPRA</p>
      </div>
      <div className='header-title-container'>
        <div className='header-title'>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL</div>
      </div>
      <div className='header-shopping-button-container'>
        <button className='shop-button'>SHOP</button>
      </div>
    </div>

  );
}

export default Header;   