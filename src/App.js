import logo from './logo.svg';
import './App.css';

import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Products from './components/storefront/products.js'
import store from './store/index.js'

import { Provider } from 'react-redux'


function App() {
  return (
    <>
    <Header />
    <main>
      <Products />
    </main>
    <Footer />
    </>
  );
}

export default App;
