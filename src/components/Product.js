import React from 'react';
import '../stylesheets/Product.css';

function Product() {
  return (
    <div className='product-container'>
      <img className='product-image' src={require('../images/rain.jpg')} alt='an umbrella in the rain' />
      <div className='product-text-container'>
        <p className='product-name'>Pufi RAIN</p>
        <p className='gray-bar'></p>
        <p className='product-description'>Descripción del Producto. Este es un texto simulado</p>
      </div>
    </div>

  );
}

export default Product;         