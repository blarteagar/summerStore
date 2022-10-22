import React from 'react';
import '../stylesheets/Social.css';

function Social() {
  return (
    <div className='social-container'>
      <div className='social-text-container'>
        <p className='social-title'>INSTAGRAM</p>
        <p className='social-description'>#ESPUFI</p>
      </div>
      <div className='social-images-container'>
        <img className='social-image' src={require('../images/cart.jpg')} alt='playful ball for kids' />
        <img className='social-image' src={require('../images/goggles.jpg')} alt='donut and pineapple floaters' />
        <img className='social-image' src={require('../images/nap.jpg')} alt='a pillow for napping' />
        <img className='social-image' src={require('../images/swimsuits.jpg')} alt='a bunch of colorful swimsuits' />
        <img className='social-image' src={require('../images/rain.jpg')} alt='an umbrella in the rain' />
        <img className='social-image' src={require('../images/puff.jpg')} alt='a floating donut puff' />
      </div>
    </div>
  );
}

export default Social;   