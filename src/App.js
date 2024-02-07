import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import './App.css'

function App() {
  const [cart, setcart] = useState([]);

  const addToCart = (phoneDetails) => {
    setcart((prevCart) => [...prevCart, phoneDetails]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartlength={cart} />
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart cart={cart} />}></Route>
          <Route path='/productdetails/:id' element={<ProductDetails addToCart={addToCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
