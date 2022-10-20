import './App.css';
import Header from './components/Header.js';
import Product from './components/Product.js';
import Social from './components/Social.js';
import Newsletter from './components/Newsletter.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Header />
        <Product />
        <Social />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
