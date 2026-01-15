import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import Homescreen from './screen/Homescreen/Homescreen';
import { Routes,Route } from 'react-router-dom';
import Products from './screen/products/products';
import Footer from './component/footer/footer';
import Cart from './screen/cart/cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Homescreen/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
