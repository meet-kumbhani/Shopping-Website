import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/productdetails/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
