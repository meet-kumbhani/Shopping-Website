import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Mynavbar from './Components/Navbar'
import './App.css'

function App() {
  let [cart, setcart] = useState([]);

  useEffect(() => {
    let cartlen = JSON.parse(localStorage.getItem("cart"))
    setcart(cartlen || [])
  }, []);

  let addToCart = (phoneDetails) => {
    setcart((prevCart) => [...prevCart, phoneDetails]);
  };

  return (
    <>
      <BrowserRouter>
        <Mynavbar length={cart.length} />
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart cart={cart} setter={setcart} />}></Route>
          <Route path='/productdetails/:id' element={<ProductDetails addToCart={addToCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
