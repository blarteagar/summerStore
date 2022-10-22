import React from 'react';
import '../stylesheets/Social.css';

function Social() {
  return (
    <div className='social-container'>
      <div className='product-text-container'>
        <p className='product-name'>INSTAGRAM</p>
        <p className='product-description'>#ESPUFI</p>
      </div>
      <div className='social-images-container'>
        <img className='social-image' src={require('../images/kids-ball.jpg')} alt='playful ball for kids' />
        <img className='social-image' src={require('../images/floaters.jpg')} alt='donut and pineapple floaters' />
        <img className='social-image' src={require('../images/summer-stuff.jpg')} alt='a knitted chair in summer' />
        <img className='social-image' src={require('../images/swimsuits.jpg')} alt='abunch of colorful swimsuits' />
        <img className='social-image' src={require('../images/girl-floating.jpg')} alt='girl floating in a donut floater' />
        <img className='social-image' src={require('../images/colorful-goggles.jpg')} alt='a bunch of colorful goggles' />
      </div>
    </div>
  );
}

export default Social;   