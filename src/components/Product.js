import React from 'react';
import '../stylesheets/Product.css';

function Product() {
  return (
    <div className='product-container'>
      <img className='product-image' src={require('../images/girl-floating.jpg')} alt='girl floating in a donut floater' />
      <div className='product-text-container'>
        <p className='product-name'>Floaters</p>
        <p className='product-description'>Hours and hours having fun with the sun</p>
      </div>
    </div>

  );
}

export default Product;