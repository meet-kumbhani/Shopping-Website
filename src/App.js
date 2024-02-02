import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/productdetails' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>





    </>
  );
}

export default App;
